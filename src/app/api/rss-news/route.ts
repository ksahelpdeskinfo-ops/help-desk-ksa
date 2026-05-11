import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

const RSS_SOURCES = [
  { name: "Saudi Gazette", url: "https://saudigazette.com.sa/rss/1" },
  { name: "Arab News", url: "https://www.arabnews.com/taxonomy/term/1/feed" },
  { name: "Saudi Press Agency (SPA)", url: "https://www.spa.gov.sa/rss/rss.xml" },
  { name: "Al Arabiya English", url: "https://english.alarabiya.net/rss/news" },
  { name: "Gulf News - Saudi", url: "https://gulfnews.com/rss/world/gcc/saudi-arabia" }
];

export const dynamic = 'force-dynamic';

function getSecondsUntilNext10AMAST() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const astHours = (utcHours + 3) % 24;
  
  const nowInSeconds = astHours * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
  const targetInSeconds = 10 * 3600; // 10:00 AM AST
  
  if (nowInSeconds < targetInSeconds) {
    return targetInSeconds - nowInSeconds;
  } else {
    return (24 * 3600) - nowInSeconds + targetInSeconds;
  }
}

export async function GET() {
  try {
    const allNews = [];
    const apiKey = process.env.NEWSDATA_API_KEY;

    // 1. Fetch from NewsData.io (High priority, large volume)
    if (apiKey) {
      try {
        const url = `https://newsdata.io/api/1/latest?country=sa&apikey=${apiKey}&language=en&size=50`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results && Array.isArray(data.results)) {
          const apiNews = data.results.map((article: any) => ({
            headline: article.title,
            summary: article.description || article.content?.substring(0, 200) + "...",
            link: article.link,
            source: article.source_id?.toUpperCase() || "Global News",
            date: article.pubDate ? new Date(article.pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : "Today"
          }));
          allNews.push(...apiNews);
        }
      } catch (err) {
        console.error("NewsData.io fetch failed:", err);
      }
    }

    // 2. Supplement with RSS feeds (Reliable fallback)
    for (const source of RSS_SOURCES) {
      if (source.url) {
        try {
          const feed = await parser.parseURL(source.url);
          const items = feed.items.slice(0, 15).map(item => ({
            headline: item.title,
            summary: item.contentSnippet || item.content || "",
            link: item.link,
            source: source.name,
            date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : "Recently"
          }));
          allNews.push(...items);
        } catch (e) {
          console.error(`Failed to fetch ${source.name}:`, e);
        }
      }
    }

    // 3. Deduplicate by headline
    const uniqueNews = Array.from(new Map(allNews.map(item => [item.headline, item])).values());
    const secondsTo10AM = getSecondsUntilNext10AMAST();

    return NextResponse.json({ news: uniqueNews }, {
      headers: {
        'Cache-Control': `public, s-maxage=${secondsTo10AM}, stale-while-revalidate=600`
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

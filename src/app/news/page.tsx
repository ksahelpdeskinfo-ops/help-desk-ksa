"use client";

import { useEffect, useState } from "react";
import { Newspaper, Printer, Share2, Globe, Clock, ArrowRight, TrendingUp } from "lucide-react";

interface NewsItem {
  headline: string;
  source: string;
  date: string;
  summary?: string;
  link?: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>("00:00:00.000");

  useEffect(() => {
    let animationFrameId: number;
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ms = now.getMilliseconds().toString().padStart(3, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}.${ms}`);
      animationFrameId = requestAnimationFrame(updateTime);
    };
    updateTime();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/rss-news");
        const data = await res.json();
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          setNews(data.news);
        } else {
          throw new Error("Empty news feed");
        }
      } catch (err) {
        console.error("News fetch failed, using static fallback:", err);
        setNews([
          {
            headline: "MHRSD Launches New 'Skill Verification' Program for 20 Professional Roles",
            source: "Official Gazette",
            date: "Today",
            summary: "The Ministry of Human Resources has introduced a mandatory skill verification program to ensure all expatriate workers in specialized sectors meet national quality standards.",
            link: "https://qiwa.sa"
          },
          {
            headline: "Digital IQAMA: New Features Added to Absher & Tawakkalna Services",
            source: "Saudi News Agency",
            date: "Today",
            summary: "Authorities have updated the digital identity portal to allow for instantaneous professional status updates and easier family sponsorship management.",
            link: "https://absher.sa"
          },
          {
            headline: "Saudi Labor Court: Resolution Time Reduced to 15 Days for Wage Disputes",
            source: "Legal Watch",
            date: "Yesterday",
            summary: "A new directive from the Ministry of Justice mandates that all wage-related labor disputes must be mediated or resolved within 15 working days.",
            link: "https://www.hrsd.gov.sa"
          },
          {
            headline: "Riyadh Expo 2030: Massive Job Growth Projected for Construction Sector",
            source: "Economic Journal",
            date: "Today",
            summary: "Analysts predict a surge of over 500,000 new professional roles in Riyadh as infrastructure projects for the 2030 World Expo begin execution.",
            link: "#"
          },
          {
            headline: "Simplified Exit/Re-entry Visa Procedures Now Live on Qiwa Platform",
            source: "Saudi Gazette",
            date: "Yesterday",
            summary: "The new automated system removes the need for manual employer approval for exit visas under specific conditions of the Labor Reform Initiative.",
            link: "https://saudigazette.com.sa"
          }
        ]);
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  const featureArticle = news[0];
  const secondaryArticles = news.slice(1, 4);
  const otherArticles = news.slice(4);

  return (
    <div className="bg-[#f4ecd8] min-h-screen text-[#1a1a1a] pb-24 font-serif selection:bg-black selection:text-slate-900">
      
      {/* Top Utility Bar - Vintage Style */}
      <div className="border-b-2 border-black/10 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-60">
          <div className="flex gap-4">
            <span>Riyadh Edition</span>
            <span className="hidden sm:inline border-l border-black/20 pl-4">Late City Final</span>
            <span className="hidden sm:inline border-l border-black/20 pl-4 font-mono font-bold tracking-widest tabular-nums">{currentTime}</span>
          </div>
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              <Printer size={12} /> Print Edition
            </button>
            <span className="italic uppercase border-l border-black/20 pl-4">Truth & Service Since 1924</span>
          </div>
        </div>
      </div>

      {/* Main Masthead */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center border-b-[8px] border-double border-black mb-12">
        <div className="flex flex-col items-center">
          <div className="text-[11px] font-black uppercase tracking-[0.6em] mb-4 border-b border-black pb-1">Special Kingdom Gazette Edition</div>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-4 font-serif drop-shadow-sm select-none">
            Sands & Silicon
          </h1>
          <div className="w-full flex justify-between items-center py-3 border-y border-black/60 text-xs font-black uppercase tracking-[0.25em] mt-4">
            <span>Vol. CLXII ... No. 58,241</span>
            <span className="hidden lg:block italic normal-case font-serif text-2xl opacity-80">"Everything for the Expat, Nothing but the Truth"</span>
            <span>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </header>

      {/* Breaking News Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-2 border-black p-0.5">
          <div className="bg-black text-slate-900 px-0 py-2 text-sm font-bold flex items-center overflow-hidden relative">
            <div className="bg-red-700 px-6 py-2 z-10 shrink-0 border-r-2 border-white shadow-[15px_0_20px_rgba(0,0,0,0.6)] uppercase tracking-tighter">
              EXTRA! EXTRA!
            </div>
            <div className="font-serif italic text-lg uppercase tracking-tight whitespace-nowrap">
              <div className="inline-block animate-marquee pl-10">
                {news.slice(0, 10).map(n => n.headline).join(" • ")} • {news.slice(0, 10).map(n => n.headline).join(" • ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center opacity-50">
            <div className="w-16 h-16 border-4 border-black/10 border-t-black rounded-full animate-spin mb-4" />
            <p className="font-serif italic text-2xl tracking-widest uppercase">Engraving the plates...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Vertical Column Divider Line */}
            <div className="hidden lg:block absolute left-[66.666%] top-0 bottom-0 w-px bg-black/10 -ml-6" />

            {/* Main Feature Column */}
            <div className="lg:col-span-8 lg:pr-12">
              {featureArticle && (
                <article className="mb-20 border-b-[4px] border-double border-black pb-16">
                  <div className="mb-10">
                    <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black mb-6 leading-[0.85] hover:opacity-75 transition-all cursor-pointer uppercase tracking-tighter">
                      {featureArticle.headline}
                    </h2>
                    <div className="flex items-center gap-4 text-[11px] font-black uppercase mb-2 opacity-70 tracking-[0.2em]">
                      <span>By Our Special Envoy</span>
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      <span>{featureArticle.source}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <p className="text-2xl leading-[1.1] italic font-serif border-r border-black/10 pr-12 text-justify">
                      {featureArticle.summary?.split(' ').slice(0, 45).join(' ')}...
                    </p>
                    <p className="text-lg leading-snug first-letter:text-8xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:leading-[0.75] first-letter:mt-3 text-justify font-serif">
                      {featureArticle.summary?.split(' ').slice(45).join(' ')}
                    </p>
                  </div>
                  <div className="mt-12 pt-10 border-t border-black/10 flex justify-center">
                    <a href={featureArticle.link} target="_blank" className="inline-block border-[4px] border-black px-12 py-4 font-black uppercase tracking-[0.4em] hover:bg-black hover:text-slate-900 transition-all text-xs shadow-[6px_6px_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none">
                      Read The Full Report
                    </a>
                  </div>
                </article>
              )}

              {/* Secondary Grid - Dense BroadSheet Look */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {secondaryArticles.map((item, i) => (
                  <article key={i} className="group border-b border-black/10 pb-12 last:border-0 md:last:border-b-0">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">{item.source} • {item.date}</div>
                    <h3 className="text-3xl font-black mb-5 group-hover:opacity-70 transition-opacity leading-[0.9] uppercase tracking-tighter decoration-black/20 underline underline-offset-4 decoration-2">
                      {item.headline}
                    </h3>
                    <p className="text-base leading-snug opacity-90 line-clamp-6 font-serif text-justify italic">
                      {item.summary}
                    </p>
                    <div className="mt-8">
                      <a href={item.link} target="_blank" className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 hover:opacity-60 transition-all">Continue Reading</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              {/* Market & Weather Report - Vintage Style */}
              <div className="border-[4px] border-double border-black p-8 mb-16 bg-white/30 shadow-[4px_4px_0_rgba(0,0,0,0.05)]">
                <h4 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-8 text-center tracking-tighter">Market & Weather</h4>
                <div className="space-y-5 font-serif text-base">
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span className="font-bold uppercase tracking-tighter">Riyadh G.M.T.</span>
                    <span className="italic">34°C / Fine</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span className="font-bold uppercase tracking-tighter">Jeddah Port</span>
                    <span className="italic">31°C / Calms</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span className="font-bold uppercase tracking-tighter">SAR/USD</span>
                    <span className="italic">3.7500</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span className="font-bold uppercase tracking-tighter">SAR/INR</span>
                    <span className="italic">22.1452</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold uppercase tracking-tighter">SAR/PHP</span>
                    <span className="italic">14.8210</span>
                  </div>
                </div>
                <div className="mt-8 text-[9px] font-black uppercase text-center opacity-40 tracking-[0.3em]">Recorded 10:00 AM AST • Official Figures</div>
              </div>



              <h3 className="text-3xl font-black uppercase border-b-[3px] border-black pb-3 mb-10 tracking-tighter italic">
                Local Intelligence
              </h3>
              <div className="space-y-12">
                {otherArticles.slice(0, 6).map((item, i) => (
                  <article key={i} className="group border-b border-black/10 pb-6 last:border-0">
                    <div className="text-[9px] font-black uppercase opacity-50 mb-2 tracking-widest">{item.date} • {item.source}</div>
                    <h4 className="text-xl font-bold leading-tight group-hover:underline cursor-pointer italic font-serif">
                      {item.headline}
                    </h4>
                  </article>
                ))}
              </div>

              <div className="mt-20 border-t-[4px] border-double border-black pt-12">
                <h3 className="text-3xl font-black uppercase mb-8 italic tracking-tighter">The Editor's Dispatch</h3>
                <p className="text-base font-serif leading-relaxed opacity-90 italic text-justify">
                  "As the Kingdom moves forward with its noble Vision, our duty remains to chronicle the shifts in labor and law with absolute fidelity. The expat community remains the backbone of our progress."
                </p>
                <div className="mt-12 flex flex-col items-center opacity-50 transition-all hover:opacity-100">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] border-y-2 border-black py-2">Official Community Seal</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* More News Archive - Dense 3-Column Grid */}
        {!loading && otherArticles.length > 6 && (
          <div className="mt-20 pt-20 border-t-[8px] border-double border-black">
            <h3 className="text-5xl font-black uppercase mb-16 text-center tracking-[0.4em] border-y-2 border-black py-6 inline-block mx-auto w-full italic">
              The Daily News Archive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {otherArticles.slice(6).map((item, i) => (
                <article key={i} className="group border-b border-black/10 pb-8 last:border-0">
                  <div className="text-[9px] font-black uppercase opacity-50 mb-3 tracking-widest">{item.date} • {item.source}</div>
                  <h4 className="text-xl font-black leading-none group-hover:opacity-60 cursor-pointer mb-4 uppercase tracking-tighter">
                    {item.headline}
                  </h4>
                  <p className="text-sm font-serif leading-snug opacity-70 line-clamp-3 text-justify italic">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t-[6px] border-double border-black pt-16 text-center opacity-50 pb-12">
        <div className="mb-6 flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="font-mono font-bold tabular-nums tracking-widest">{currentTime}</span>
          <span>Printed in Riyadh</span>
          <span>Est. 1924</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.25em] max-w-3xl mx-auto leading-loose">
          All Rights Reserved © Sands & Silicon Printing Office • Registered Under Community Act VIII • Riyadh, Saudi Arabia • A Community Enterprise
        </p>
      </div>

    </div>
  );
}


"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

interface NewsItem {
  headline: string;
  href?: string;
}

export function GeminiNews() {
  const { t } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/groq-news");
        const data = await res.json();
        if (data.news) {
          setNews(data.news);
        } else {
          throw new Error("No news found");
        }
      } catch (err) {
        console.log("Using static fallback news (API key not configured)");
        // Fallback static news if API fails
        setNews([
          { headline: "New updates to the KSA Labour Law regarding contract terminations.", href: "/worker-rights-saudi-law" },
          { headline: "MHRSD announces new simplified procedures for Iqama transfers via Qiwa.", href: "/sponsor-transfer-status-saudi" },
          { headline: "Guidance on End of Service (ESB) calculations for private sector employees updated.", href: "/end-of-service-saudi-calculator" },
          { headline: "Latest updates on exit re-entry visa fees and validity extensions.", href: "/exit-reentry-visa-saudi" }
        ]);
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section id="news" className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#006C35]/10 text-[#006C35] flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{t('ai_labor_insights')}</h2>
                <p className="text-slate-600 text-sm">{t('automated_updates')}</p>
              </div>
            </div>
            <Link 
              href="/news" 
              className="btn-secondary whitespace-nowrap gap-2 text-sm"
            >
              {t('full_labor_gazette')} <ArrowRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-16 bg-slate-50 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.slice(0, 4).map((item, i) => (
                <Link 
                  href={item.href || "/news"}
                  key={i}
                  className="group p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#006C35] transition-colors flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#006C35] shrink-0" />
                  <p className="font-medium text-slate-700 flex-1 text-sm leading-snug group-hover:text-[#006C35] transition-colors line-clamp-2">
                    {item.headline}
                  </p>
                  <ChevronRightIcon />
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

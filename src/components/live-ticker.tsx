"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingUp } from "lucide-react";

interface TickerItem {
  headline: string;
}

export function LiveTicker() {
  const [news, setNews] = useState<TickerItem[]>([]);

  useEffect(() => {
    async function fetchTicker() {
      try {
        const res = await fetch('/api/rss-news');
        const data = await res.json();
        setNews(data.news || []);
      } catch (err) {
        console.error("Ticker fetch failed:", err);
      }
    }
    fetchTicker();
  }, []);

  if (news.length === 0) return null;

  return (
    <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mr-6 animate-pulse">
          <AlertCircle size={14} /> Breaking
        </div>
        
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-20 items-center"
        >
          {news.map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight">
              <TrendingUp size={14} className="text-ksa-gold" />
              {item.headline}
              <span className="text-white/20">/</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {news.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight">
              <TrendingUp size={14} className="text-ksa-gold" />
              {item.headline}
              <span className="text-white/20">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Ayah {
  text: string;
  translation: string;
  surah: string;
  number: number;
}

export function QuranAyat() {
  const [ayah, setAyah] = useState<Ayah | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const fetchAyah = async () => {
    try {
      setIsVisible(false);
      // Wait for fade out
      setTimeout(async () => {
        const randomAyahNum = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyahNum}/editions/quran-uthmani,en.asad`);
        const data = await response.json();
        
        if (data.code === 200) {
          setAyah({
            text: data.data[0].text,
            translation: data.data[1].text,
            surah: data.data[0].surah.englishName,
            number: data.data[0].numberInSurah
          });
          setIsVisible(true);
        }
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Failed to fetch Ayah:", error);
    }
  };

  useEffect(() => {
    fetchAyah();
    const interval = setInterval(fetchAyah, 60000); // Every 1 minute
    return () => clearInterval(interval);
  }, []);

  if (loading && !ayah) return null;

  return (
    <div className="bg-[#006C35]/5 border-b border-[#006C35]/10 py-4 px-4 overflow-hidden relative">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'}`}>
        
        {/* Arabic Line */}
        <p className="text-sm md:text-base font-arabic text-[#006C35] leading-relaxed font-bold mb-2" dir="rtl">
          {ayah?.text}
        </p>

        {/* Translation Line */}
        <p className="text-[10px] md:text-xs text-slate-600  italic font-light max-w-2xl mx-auto">
          "{ayah?.translation}" 
          <span className="ml-2 not-italic font-bold text-slate-400">
            — {ayah?.surah} ({ayah?.number})
          </span>
        </p>

      </div>
    </div>
  );
}

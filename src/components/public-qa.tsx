"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface QAPost {
  Question: string;
  Answer: string;
  Approved: string;
  Category?: string;
  Date?: string;
}

interface PublicQAProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function PublicQA({ searchQuery = "", onSearchChange }: PublicQAProps) {
  const { t } = useLanguage();
  const [qaData, setQaData] = useState<QAPost[]>([]);
  const [filteredData, setFilteredData] = useState<QAPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = process.env.NEXT_PUBLIC_SHEET_URL || "https://opensheet.elk.sh/12AW97hvs-KUb-Uud356YAsvOQUvuIWtyrpImwKbMiks/Sheet1";
        const res = await fetch(url);
        const data = await res.json();
        const approved = data.filter((item: QAPost) => item.Approved?.toLowerCase() === "yes");
        setQaData(approved);
        setFilteredData(approved);
      } catch (err) {
        console.error("Error fetching Q&A:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = qaData.filter(item => 
      item.Question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.Answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setExpandedIndex(null); // reset expansion on search
  }, [searchQuery, qaData]);

  return (
    <section id="qa" className="bg-slate-50  py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[#006C35] font-semibold mb-2">
              <BookOpen size={18} />
              <span className="text-sm uppercase tracking-wide">{t('kb_knowledge_base')}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 ">
              {t('kb_public_qa')}
            </h2>
          </div>
          
          <div className="w-full md:w-72 relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder={t('kb_filter_placeholder')} 
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200  bg-white  focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-sm text-slate-900 "
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>

        {/* Accordion Content */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-16 rounded-xl bg-white  animate-pulse border border-slate-200 " />
            ))}
          </div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-16 bg-white  rounded-xl border border-slate-200 ">
            <Search size={32} className="mx-auto mb-4 text-slate-400" />
            <p className="text-slate-600  font-medium mb-4">{t('kb_no_results')} "{searchQuery}"</p>
            <button 
              onClick={() => onSearchChange?.("")}
              className="text-[#006C35] font-semibold hover:underline text-sm"
            >
              {t('kb_clear_filters')}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredData.map((item, i) => (
              <div 
                key={i}
                className="bg-white  rounded-xl border border-slate-200  overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between focus:outline-none hover:bg-slate-50  transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#006C35] bg-[#006C35]/10 px-2 py-0.5 rounded">
                        {item.Category || t('general')}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 ">
                      {item.Question}
                    </h3>
                  </div>
                  <div className="mt-1 text-slate-400 shrink-0">
                    {expandedIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {expandedIndex === i && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100  bg-slate-50/50 ">
                    <p className="text-slate-600  text-sm leading-relaxed whitespace-pre-wrap">
                      {item.Answer}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200  flex justify-end">
                       <span className="text-xs text-slate-400 font-medium">{t('kb_official_guidance')}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

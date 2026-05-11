"use client";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FloatingSupport() {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-6 left-6 z-[999]">
      <a 
        href="mailto:ksa.helpdesk.info@gmail.com" 
        className="flex items-center justify-center w-14 h-14 bg-[#006C35] text-white rounded-full shadow-lg hover:bg-[#005a2c] hover:scale-110 transition-all duration-300 group"
        title={t('floating_support')}
      >
        <Mail size={24} />
        <span className="absolute left-16 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {t('floating_support')}
        </span>
      </a>
    </div>
  );
}

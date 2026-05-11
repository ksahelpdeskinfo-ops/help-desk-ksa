"use client";

import { 
  Heart, Globe, ExternalLink, ShieldCheck, HelpCircle, Info, Scale, DollarSign, Users, CheckCircle2, AlertTriangle, FileText, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { AskQuestion } from "@/components/ask-question";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const [showTerms, setShowTerms] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-left">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Heart size={16} /> {t('about_subtitle')}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {t('about_title').split(' ')[0]} {t('about_title').split(' ')[1]} <span className="text-[#006C35]">{t('about_title').split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            {t('about_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content Section */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {t('about_main_p1')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                     <ShieldCheck className="text-[#006C35]" /> {t('about_goal_title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('about_goal_desc')}
                  </p>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                     <Users className="text-[#006C35]" /> {t('about_vision_title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('about_vision_desc')}
                  </p>
               </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-8 font-light">
              {t('about_main_p2')}
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-amber-50/50 rounded-[2.5rem] border border-amber-100 p-8 md:p-12 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-amber-700 mb-8 flex items-center gap-3">
            <AlertTriangle size={32} /> {t('about_disclaimer_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <DisclaimerCard 
              title={t('about_disclaimer_1_title')} 
              desc={t('about_disclaimer_1_desc')} 
            />
            <DisclaimerCard 
              title={t('about_disclaimer_2_title')} 
              desc={t('about_disclaimer_2_desc')} 
            />
            <DisclaimerCard 
              title={t('about_disclaimer_3_title')} 
              desc={t('about_disclaimer_3_desc')} 
            />
            <DisclaimerCard 
              title={t('about_disclaimer_4_title')} 
              desc={t('about_disclaimer_4_desc')} 
            />
          </div>

          <div className="mt-12 p-8 bg-white rounded-3xl border border-amber-100 text-left">
             <h3 className="text-xl font-bold mb-4">{t('about_final_note_title')}</h3>
             <p className="text-sm text-slate-600 leading-relaxed">
                {t('about_final_note_desc')}
             </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#006C35] p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col justify-center text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">{t('about_founder_title')}</h2>
              <p className="text-white/80 leading-relaxed mb-8 font-light">
                {t('about_founder_desc1')}
              </p>
              <p className="text-white/80 leading-relaxed mb-8 font-light">
                {t('about_founder_desc2')}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] text-white/60 mb-2 uppercase tracking-widest font-black">Learn More</p>
                <a 
                  href="https://khan.linux-aios.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                >
                  Visit khan.linux-aios.com <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#006C35]/5 p-10 rounded-[2.5rem] border border-[#006C35]/10 shadow-sm flex flex-col justify-center text-left">
             <h2 className="text-2xl font-bold mb-4 text-[#006C35]">{t('about_support_title')}</h2>
             <p className="text-slate-600 leading-relaxed font-light">
                {t('about_support_desc')}
             </p>
          </div>
        </div>

        <AskQuestion />

        {/* Footer Actions */}
        <div className="text-center pt-8">
          <button 
            onClick={() => setShowTerms(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-300 transition-all shadow-xl"
          >
            <FileText size={24} /> {t('about_terms_btn')}
          </button>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-white border border-slate-200/80 backdrop-blur-sm" onClick={() => setShowTerms(false)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-12">
            <button 
              onClick={() => setShowTerms(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"
            >
              ✕
            </button>
            
            <div className="prose prose-slate max-w-none">
               <h1 className="text-3xl font-black mb-2">Terms & Conditions</h1>
               <p className="text-slate-400 text-xs mb-8">Last Updated: 2026</p>
               
               <p className="text-sm leading-relaxed mb-8">
                  Welcome to this website. By accessing or using this platform, you agree to the Terms & Conditions described below. If you do not agree, please discontinue use of the website immediately.
               </p>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">1. Purpose of This Website</h3>
                  <p className="text-sm text-slate-600">This website is created for educational and informational purposes only. It provides simplified guides and general awareness content related to work, visas, labor laws, education, and lifestyle topics in Saudi Arabia. The content is designed to help users better understand general procedures and systems.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">2. No Official Authority</h3>
                  <p className="text-sm text-slate-600">This website is not an official government platform and is not affiliated with any government entity or authority. We do not represent any ministry, department, legal authority, or immigration/labor office. All content is independent and created for awareness purposes only.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">3. No Legal or Professional Advice</h3>
                  <p className="text-sm text-slate-600">The information provided on this website is not legal, financial, immigration, or professional advice. Users must always consult official government sources or licensed professionals before making any decisions.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">4. Verification Responsibility</h3>
                  <p className="text-sm text-slate-600">Users are strongly advised to verify all information from official government portals before acting on it. This website does not guarantee accuracy, completeness, or updated status of any information at all times.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">5. No Payments Policy</h3>
                  <p className="text-sm text-slate-600">This website is completely free to use. We do NOT charge fees, request payments or donations, offer paid services, or collect money for information. Report any person claiming payment in the name of this website as fraudulent.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">6. Limitation of Liability</h3>
                  <p className="text-sm text-slate-600">By using this website, you agree that you use all information at your own risk. We are not responsible for any loss, damage, or issue arising from use of content. We are not liable for any legal, financial, or administrative consequences.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">7. External Links</h3>
                  <p className="text-sm text-slate-600">This website may contain links to external or official websites. We are not responsible for content, policy changes, or availability of third-party services.</p>
               </section>

               <section className="mb-8">
                  <h3 className="text-xl font-bold mb-4">12. Good Intent Statement</h3>
                  <p className="text-sm text-slate-600">This platform is created with the intention of helping people understand basic systems and providing awareness-based guidance. We aim to contribute positively and ethically toward awareness and understanding.</p>
               </section>

               <section className="pt-8 border-t border-slate-100 mt-12">
                  <p className="text-xs text-slate-400 italic">If you have questions regarding these Terms & Conditions, you may contact us through the website contact form.</p>
               </section>
            </div>

            <div className="mt-12 text-center">
               <button 
                onClick={() => setShowTerms(false)}
                className="px-10 py-4 bg-[#006C35] text-white rounded-2xl font-bold"
               >
                I Understand
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DisclaimerCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-amber-100/50 shadow-sm">
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

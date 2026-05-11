"use client";

import { Briefcase, FileText, ShieldCheck, ExternalLink, Globe, Upload, Users } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function JobsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Information Section */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Briefcase size={14} /> Careers
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            {t('jobs_title')}: <br />
            <span className="text-[#006C35]">{t('jobs_subtitle')}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md font-light">
            {t('jobs_desc')}
          </p>

          <div className="space-y-6">
            <Feature icon={<Users />} title={t('jobs_local_network')} desc={t('jobs_local_network_desc')} />
            <Feature icon={<Briefcase />} title={t('jobs_active_referral')} desc={t('jobs_active_referral_desc')} />
            <Feature icon={<ShieldCheck />} title={t('jobs_verified_partners')} desc={t('jobs_verified_partners_desc')} />
          </div>
          
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-semibold text-sm mb-2 text-slate-900">{t('jobs_technical_note')}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('jobs_technical_note_desc')}
            </p>
          </div>
        </div>

        {/* Application Form */}
        {/* External Application Portals */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-[#006C35]/10 text-[#006C35] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('jobs_official_portal')}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              {t('jobs_official_portal_desc')}
            </p>
            <a 
              href="https://job.linux-aios.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full py-4 flex justify-center items-center gap-2"
            >
              {t('jobs_open_portal')} <ExternalLink size={18} />
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-[#006C35]/10 text-[#006C35] rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('jobs_alt_method')}</h3>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              {t('jobs_alt_method_desc')}
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0uN9HyaC37ZsNFkKsbxoikcdNzmtkAsiAichJXeHDJFszzw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 flex justify-center items-center gap-2"
            >
              {t('jobs_apply_form')} <ExternalLink size={18} />
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-[#006C35]/10 text-[#006C35] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('jobs_secure_dropbox')}</h3>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              {t('jobs_secure_dropbox_desc')}
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPtS2C8Gaep-PmRY7QjFju7757uuUdYHKHOIvHsq-Ri-3H3A/viewform?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 flex justify-center items-center gap-2"
            >
              {t('jobs_secure_upload')} <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-[#006C35]/10 text-[#006C35]">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900  mb-1">{title}</h4>
        <p className="text-sm text-slate-600  leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

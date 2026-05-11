"use client";

import { AlertTriangle, Info, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function LaborAlerts() {
  const { t } = useLanguage();
  const alerts = [
    {
      type: "Update",
      title: "Wage Protection System",
      desc: "MHRSD mandates new compliance protocols for monthly payroll submissions effective this month.",
      icon: <FileText className="text-blue-600" size={20} />,
      link: "/worker-rights-saudi-law"
    },
    {
      type: "Policy",
      title: "Qiwa Contract Verifications",
      desc: "Digital contracts now require updated verification for all new employment agreements.",
      icon: <ShieldCheck className="text-green-600" size={20} />,
      link: "/work-permits-saudi-arabia"
    },
    {
      type: "Notice",
      title: "Hajj Work Permits 1447H",
      desc: "Official portal for seasonal work permit applications is now open for verified companies.",
      icon: <Info className="text-yellow-600" size={20} />,
      link: "/work-permits-saudi-arabia"
    }
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
              <AlertTriangle size={18} />
              <span className="text-sm uppercase tracking-wide">{t('important_bulletins')}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {t('labor_alerts')}
            </h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-[#006C35] hover:underline flex items-center gap-1">
            {t('view_all_updates')} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alerts.map((alert, i) => (
            <div 
              key={i}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                  {alert.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{alert.type}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">{alert.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">{alert.desc}</p>
              
              <Link href={alert.link} className="text-sm font-semibold text-[#006C35] flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                {t('read_details')} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

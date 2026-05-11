"use client";

import { useState } from "react";
import { Calculator, Wallet, Info, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function CalculatorPage() {
  const { t } = useLanguage();
  const [salary, setSalary] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [reason, setReason] = useState<string>("termination");
  const [result, setResult] = useState<number | null>(null);

  const calculateEOSB = () => {
    const totalYears = years + (months / 12);
    let benefit = 0;

    if (totalYears <= 5) {
      benefit = (salary / 2) * totalYears;
    } else {
      benefit = (salary / 2) * 5 + salary * (totalYears - 5);
    }

    // Apply reason multipliers
    if (reason === "resignation") {
      if (totalYears < 2) benefit = 0;
      else if (totalYears < 5) benefit *= (1/3);
      else if (totalYears < 10) benefit *= (2/3);
      else benefit *= 1;
    }

    setResult(Math.round(benefit));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Information Section */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Calculator size={14} /> Financial Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            {t('calc_title')} <br />
            <span className="text-[#006C35]">{t('calc_subtitle')}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
            {t('calc_desc')}
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <Info className="text-[#006C35] shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-sm mb-1 text-slate-900">{t('calc_basis_title')}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('calc_basis_desc')}
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <ShieldCheck className="text-[#AD8B3A] shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-sm mb-1 text-slate-900">{t('calc_legal_title')}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('calc_legal_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('calc_salary_label')}</label>
              <div className="relative">
                <Wallet className="absolute top-1/2 -translate-y-1/2 text-slate-400 left-4" size={18} />
                <input 
                  type="number" 
                  value={salary || ""}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  placeholder="e.g. 5000"
                  className="w-full pr-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-slate-900 pl-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('calc_years_label')}</label>
                <input 
                  type="number" 
                  value={years || ""}
                  onChange={(e) => setYears(Number(e.target.value))}
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('calc_months_label')}</label>
                <input 
                  type="number" 
                  value={months || ""}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">{t('calc_reason_label')}</label>
              <select 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-slate-900 appearance-none cursor-pointer"
              >
                <option value="termination">Contract Termination (by Employer)</option>
                <option value="resignation">Resignation (by Employee)</option>
                <option value="end_of_term">End of Fixed Term Contract</option>
                <option value="force_majeure">Force Majeure</option>
              </select>
            </div>

            <button 
              onClick={calculateEOSB}
              className="btn-primary w-full py-4 mt-4 gap-2"
            >
              {t('calc_btn')} <ArrowRight size={18} />
            </button>

            {result !== null && (
              <div className="mt-6 p-6 rounded-xl bg-[#006C35] text-white text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">{t('calc_result_label')}</p>
                <h3 className="text-4xl font-bold">
                  {result.toLocaleString()} <span className="text-xl font-medium">SAR</span>
                </h3>
                <p className="mt-4 text-xs text-white/60">
                  {t('calc_note')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

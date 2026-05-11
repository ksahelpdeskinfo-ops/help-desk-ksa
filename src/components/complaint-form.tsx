"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Phone, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export function ComplaintForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "",
      complaint: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string().required(t('mobile_number')),
      complaint: Yup.string().min(10, "Please provide more details").required(t('report_details')),
    }),
    onSubmit: async (values) => {
      console.log("Complaint Submitted:", values);
      setSubmitted(true);
    },
  });

  return (
    <section id="complaint" className="bg-white  py-20 border-t border-slate-200 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50  rounded-2xl border border-slate-200  overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Information Column */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 ">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#006C35]/10 rounded-xl flex items-center justify-center text-[#006C35]">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 ">{t('file_report')}</h3>
              </div>
              <p className="text-slate-600  leading-relaxed mb-8">
                {t('report_desc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" />
                  <span>{t('encrypted')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" />
                  <span>{t('immediate_routing')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 ">
                  <CheckCircle2 size={16} className="text-[#006C35]" />
                  <span>{t('mobile_verification')}</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="p-8 md:p-10 bg-white ">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#006C35]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-[#006C35]" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900  mb-2">{t('report_submitted')}</h4>
                  <p className="text-slate-500  mb-8 text-sm">
                    {t('report_logged_desc')}
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary w-full"
                  >
                    {t('submit_another_report')}
                  </button>
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700  mb-2">
                      {t('mobile_number')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="+966 5..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300  bg-white  text-slate-900  focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors"
                        {...formik.getFieldProps("phone")}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 text-xs mt-1 font-medium">{formik.errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700  mb-2">
                      {t('report_details')} <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      placeholder={t('describe_issue')}
                      rows={5}
                      className="w-full p-3 rounded-lg border border-slate-300  bg-white  text-slate-900  focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors resize-none"
                      {...formik.getFieldProps("complaint")}
                    />
                    {formik.touched.complaint && formik.errors.complaint && (
                      <div className="text-red-500 text-xs mt-1 font-medium">{formik.errors.complaint}</div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full gap-2"
                  >
                    {t('submit_question')} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

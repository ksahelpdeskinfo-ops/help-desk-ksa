"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { MessageSquare, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export function AskQuestion() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      question: "",
      email: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      question: Yup.string().required(t('your_question')).min(10, "Question is too short"),
      email: Yup.string().email("Invalid email").required(t('email_address')),
      mobile: Yup.string().required(t('mobile_number')),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkSO7YnEcO2bnddGCtEIPtxUBgyJG1CMDNULAAFSd1rg_DjZ1TQevQx-z5IhtszS2v/exec";
        
        const params = new URLSearchParams();
        params.append("Question", values.question);
        params.append("Email", values.email);
        params.append("Mobile", values.mobile);
        params.append("Timestamp", new Date().toISOString());
        params.append("Source", "Ask the Community");

        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        });
        
        setSubmitted(true);
      } catch (error) {
        console.error("Submission failed:", error);
        setSubmitted(true); 
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section className="bg-white py-20 text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-4">
            <MessageSquare size={14} /> {t('need_help')}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t('ask_community')}
          </h2>
          <p className="text-slate-600 font-light leading-relaxed">
            {t('ask_community_desc')}
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#006C35]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-[#006C35]" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{t('question_submitted')}</h4>
              <p className="text-slate-500 mb-8 text-sm font-light">
                {t('question_received_desc')}
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                {t('ask_another_question')}
              </button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('your_question')} <span className="text-red-500">*</span>
                </label>
                <textarea 
                  placeholder={t('question_placeholder')}
                  rows={4}
                  className="w-full p-4 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors resize-none text-sm text-left"
                  {...formik.getFieldProps("question")}
                />
                {formik.touched.question && formik.errors.question && (
                  <div className="text-red-500 text-xs mt-1 font-medium">{formik.errors.question}</div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('email_address')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-sm text-left"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-xs mt-1 font-medium">{formik.errors.email}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('mobile_number')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="+966 5..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-[#006C35] focus:ring-1 focus:ring-[#006C35] outline-none transition-colors text-sm text-left"
                    {...formik.getFieldProps("mobile")}
                  />
                  {formik.touched.mobile && formik.errors.mobile && (
                    <div className="text-red-500 text-xs mt-1 font-medium">{formik.errors.mobile}</div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary w-full gap-2 py-3 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>{t('processing')} <RefreshCw size={16} className="animate-spin" /></>
                  ) : (
                    <>{t('submit_question')} <Send size={16} /></>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}

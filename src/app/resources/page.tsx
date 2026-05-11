"use client";

import { 
  ExternalLink, ShieldCheck, Globe, Smartphone, CheckCircle2, 
  Plane, Heart, Building, Car, Home, Wallet, Zap, AlertTriangle, PhoneCall,
  Landmark, Shield, Train, FileSearch, Stethoscope, Briefcase
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-left">
      
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-6">
            <Globe size={16} /> {t('resources_subtitle')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            {t('resources_title').split('&')[0]} <span className="text-[#006C35]">& {t('resources_title').split('&')[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
            {t('resources_desc')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Security Warning */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 relative z-10 text-left">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck size={40} className="text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('resources_security_title')}</h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm font-light">
              {t('resources_security_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006C35]">
                <CheckCircle2 size={16} /> Official Stores Only
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006C35]">
                <CheckCircle2 size={16} /> Never Share OTPs
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Hotlines Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <PhoneCall className="text-red-500" /> {t('resources_emergency_title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <HotlineCard num="911" desc={t('hotline_emergency')} />
            <HotlineCard num="997" desc={t('hotline_ambulance')} />
            <HotlineCard num="19911" desc={t('hotline_labor')} />
            <HotlineCard num="1966" desc={t('hotline_hajj')} />
          </div>
        </div>

        {/* Categorized Directories */}
        <div className="space-y-16">
          
          <CategorySection title={t('resources_category_residency')} icon={<Building className="text-[#006C35]" size={28} />}>
            <DirectoryCard title="Absher" desc="Main app for Iqama, visa, traffic violations, exit re-entry, and passport services." url="https://www.absher.sa" isApp t={t} />
            <DirectoryCard title="Nafath" desc="Secure login approval system for Absher, Qiwa, banks, and all government services." url="https://iam.gov.sa" isApp t={t} />
            <DirectoryCard title="Tawakkalna" desc="National super app with digital documents, address, services, and permits." url="https://www.tawakkalna.sa" isApp t={t} />
            <DirectoryCard title="NIC (National Info Center)" desc="The core identity verification layer and government database system." url="https://www.nic.gov.sa" t={t} />
            <DirectoryCard title="Muqeem" desc="Electronic services portal for resident management and exit re-entry status." url="https://muqeem.sa" t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_finance')} icon={<Landmark className="text-blue-600" size={28} />}>
            <DirectoryCard title="SAMA (Central Bank)" desc="Banking complaints, financial regulations, and consumer protection." url="https://www.sama.gov.sa" t={t} />
            <DirectoryCard title="SADAD Payments" desc="National system for government bills (Iqama, fines, utilities)." url="https://www.sadad.com" t={t} />
            <DirectoryCard title="Mada / Payments" desc="National debit card network used in all ATMs & POS machines." url="https://www.mada.com.sa" t={t} />
            <DirectoryCard title="STC Pay" desc="Leading digital wallet for local and international money transfers." url="https://stcpay.com.sa" isApp t={t} />
            <DirectoryCard title="urpay" desc="Al Rajhi bank's digital wallet for seamless payments." url="https://urpay.com.sa" isApp t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_labor')} icon={<Briefcase className="text-orange-600" size={28} />}>
            <DirectoryCard title="Qiwa Platform" desc="Work contracts, Kafala transfer, resignation, and labor service issues." url="https://www.qiwa.sa" isApp t={t} />
            <DirectoryCard title="Hadaf (HRDF)" desc="Job support programs, training subsidies, and employment support." url="https://www.hrdf.org.sa" t={t} />
            <DirectoryCard title="GOSI" desc="Salary insurance, employment registration, and pension services." url="https://www.gosi.gov.sa" t={t} />
            <DirectoryCard title="Najiz (Labor Court)" desc="Ministry of Justice platform for labor court filings and legal documents." url="https://najiz.sa" isApp t={t} />
            <DirectoryCard title="Freelance Saudi" desc="Official portal for issuing freelance documents and certificates." url="https://freelance.sa" t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_traffic')} icon={<Car className="text-[#006C35]" size={28} />}>
            <DirectoryCard title="Absher Traffic" desc="Driving license renewal, vehicle registration (Istimara), and plate transfer." url="https://www.absher.sa" isApp t={t} />
            <DirectoryCard title="Najm Insurance" desc="Official platform for accident reporting and insurance claim processing." url="https://www.najm.sa" isApp t={t} />
            <DirectoryCard title="SPL Saudi Post" desc="National address registration, shipment tracking, and document delivery." url="https://splonline.com.sa" isApp t={t} />
            <DirectoryCard title="Mawgif" desc="Smart parking payment and management in many Saudi cities." url="https://mawgif.com" isApp t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_health')} icon={<Stethoscope className="text-red-500" size={28} />}>
            <DirectoryCard title="CCHI Insurance" desc="Insurance verification, employer coverage rules, and claims disputes." url="https://www.chi.gov.sa" t={t} />
            <DirectoryCard title="Sehhaty" desc="Medical appointments, sick leave, vaccine records, and prescriptions." url="https://www.moh.gov.sa" isApp t={t} />
            <DirectoryCard title="Kollona Amn" desc="Official app to report security threats or cybercrimes to the police." url="https://www.moi.gov.sa" isApp t={t} />
            <DirectoryCard title="Efaas / Crime Reporting" desc="Saudi Police platform for crime reports, lost items, and cybercrime." url="https://www.moi.gov.sa" t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_housing')} icon={<Home className="text-purple-600" size={28} />}>
            <DirectoryCard title="REDF (Housing Fund)" desc="Housing loans and mortgage support for Saudi citizens and residents." url="https://www.redf.gov.sa" t={t} />
            <DirectoryCard title="Ejar" desc="Official system for standardized rent contracts to protect tenant rights." url="https://ejar.sa" isApp t={t} />
            <DirectoryCard title="Aqar" desc="Premier platform for finding apartments, villas, and real estate." url="https://sa.aqar.fm" isApp t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_telecom')} icon={<Zap className="text-yellow-600" size={28} />}>
            <DirectoryCard title="ZATCA (Tax Authority)" desc="VAT registration, E-invoicing, and business tax compliance." url="https://www.zatca.gov.sa" t={t} />
            <DirectoryCard title="CST (Telecom Auth)" desc="SIM complaints, internet issues, and telecom disputes." url="https://www.cst.gov.sa" t={t} />
            <DirectoryCard title="Saudi Electricity (SEC)" desc="Manage electricity bills and services." url="https://www.se.com.sa" isApp t={t} />
            <DirectoryCard title="National Water (NWC)" desc="Manage water bills and report leaks." url="https://www.nwc.com.sa" isApp t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_transport')} icon={<Train className="text-cyan-600" size={28} />}>
            <DirectoryCard title="SAR (Saudi Railway)" desc="Train booking and cargo services across the Kingdom." url="https://www.sar.com.sa" t={t} />
            <DirectoryCard title="TGA (Transport Auth)" desc="Bus services, transport regulations, and public mobility." url="https://tga.gov.sa" t={t} />
            <DirectoryCard title="Visit Saudi Visa" desc="Official portal for Tourist visas and eVisas." url="https://visa.visitsaudi.com" t={t} />
            <DirectoryCard title="MOFA Visa Services" desc="Portal for Family Visit Visas and checking visa status." url="https://visa.mofa.gov.sa" t={t} />
          </CategorySection>

          <CategorySection title={t('resources_category_hajj')} icon={<Globe className="text-[#006C35]" size={28} />}>
            <DirectoryCard title="Nusuk" desc="Official platform for Umrah permits, Rawdah booking, and visitor packages." url="https://www.nusuk.sa" isApp t={t} />
            <DirectoryCard title="Ministry of Hajj" desc="Official Ministry of Hajj & Umrah portal." url="https://www.haj.gov.sa" t={t} />
            <DirectoryCard title="Official Packages" desc="Verified and official Hajj packages booking portal." url="https://masar.nusuk.sa" t={t} />
          </CategorySection>

        </div>
      </div>
    </div>
  );
}

function CategorySection({ title, icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
        {icon}
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function DirectoryCard({ title, desc, url, isApp = false, t }: { title: string, desc: string, url: string, isApp?: boolean, t: any }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#006C35] hover:shadow-md transition-all group flex flex-col h-full relative overflow-hidden text-left"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#006C35] transition-colors">{title}</h3>
        <ExternalLink size={18} className="text-slate-300 group-hover:text-[#006C35] transition-colors shrink-0" />
      </div>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6 font-light">{desc}</p>
      
      {isApp ? (
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <Smartphone size={12}/> {t('res_app_available')}
          </span>
        </div>
      ) : (
        <div className="text-xs font-semibold uppercase tracking-wider text-[#006C35]">
          {t('res_access_portal')}
        </div>
      )}
    </a>
  );
}

function HotlineCard({ num, desc }: { num: string, desc: string }) {
  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center hover:bg-red-100 transition-colors">
      <div className="text-2xl font-black text-red-600 mb-1">{num}</div>
      <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">{desc}</div>
    </div>
  );
}

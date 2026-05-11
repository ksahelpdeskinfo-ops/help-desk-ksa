"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();

  const links = [
    { name: t('nav_home'), href: "/" },
    { 
      name: t('nav_labor_tools'), 
      href: "#",
      subLinks: [
        { name: t('nav_labor_office'), href: "/labor-office" },
        { name: t('nav_eosb'), href: "/calculator" },
        { name: t('nav_tools'), href: "/tools" }
      ]
    },
    { name: t('nav_guide'), href: "/saudi-workers-guide" },
    { name: t('nav_resources'), href: "/resources" },
    { name: t('nav_community'), href: "/community-chat" },
    { name: t('nav_jobs'), href: "/jobs" },
    { name: t('nav_about'), href: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#006C35] rounded flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="w-5 h-5 object-contain invert" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg text-slate-900 leading-tight">Help Desk KSA</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <>
                    <button 
                      className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#006C35] transition-colors py-2"
                    >
                      {link.name}
                      <ChevronDown size={14} />
                    </button>
                    <div className="absolute left-0 top-full mt-0 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#006C35]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-slate-600 hover:text-[#006C35] transition-colors py-2 block"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            
            <Link 
              href="/news" 
              className="ml-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm font-medium text-slate-900 hover:border-[#006C35] transition-colors flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-red-500" />
              {t('nav_news')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-6 py-2 space-y-1 border-l-2 border-slate-100 ml-3 mt-1">
                        {link.subLinks.map((sub) => (
                          <Link 
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Link 
              href="/news" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-red-600 hover:bg-slate-50"
            >
              {t('nav_news')}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

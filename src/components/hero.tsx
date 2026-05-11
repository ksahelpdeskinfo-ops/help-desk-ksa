"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ShieldCheck, Scale, FileText, Send, Loader2, User, Bot, AlertCircle, Copy, Check, X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface HeroProps {
  onSearch: (query: string) => void;
}

interface Message {
  role: "user" | "assistant" | "error";
  content: string;
}

export function Hero({ onSearch }: HeroProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { 
          role: "assistant", 
          content: t('hero_welcome') 
        }
      ]);
    }
  }, []); // Re-run when language changes to update greeting

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleChatSubmit = async (overrideQuery?: string) => {
    const textToSubmit = overrideQuery || query;
    if (!textToSubmit.trim()) return;
    
    setIsExpanded(true);
    // Original search function (filters QA below)
    onSearch(textToSubmit);

    const userMessage = textToSubmit.trim();
    setQuery(""); // Clear input box
    
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: newMessages.filter(m => m.role !== "error").map(m => ({ role: m.role, content: m.content })) 
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      } else if (data.error) {
        // Handle misconfigured API key gracefully in UI
        if (data.error.includes("Groq API key not configured")) {
          setMessages(prev => [...prev, { 
            role: "error", 
            content: t('hero_offline') 
          }]);
        } else {
          const errorMessage = data.details || data.error;
          setMessages(prev => [...prev, { role: "error", content: errorMessage }]);
        }
      }
    } catch (err) {
      console.log("Chat API failed:", err);
      setMessages(prev => [...prev, { 
        role: "error", 
        content: t('hero_network_error') 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasInteracted = isExpanded || messages.some(m => m.role === "user");

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-[#006C35] animate-pulse" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('hero_badge')}
          </span>
        </div>

        {!messages.some(m => m.role === "user") ? (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Saudi Workers <br className="hidden md:block" /> <span className="text-[#006C35]">Guide</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero_ai_desc')}
            </p>
          </>
        ) : (
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
            AI <span className="text-[#006C35]">{t('nav_guide')}</span>
          </h1>
        )}

        {/* Chat / Search Interface */}
        <div className="max-w-3xl mx-auto">
          
          {/* Chat History Window */}
          {isExpanded && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm mb-4 text-left overflow-hidden flex flex-col h-[400px] animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
              {/* Minimize Button */}
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
                title="Minimize Chat"
              >
                <X size={18} />
              </button>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      m.role === 'user' ? 'bg-[#006C35] text-white' : 
                      m.role === 'error' ? 'bg-red-100 text-red-600' : 
                      'bg-slate-100 text-[#006C35]'
                    }`}>
                      {m.role === 'user' ? <User size={20} /> : m.role === 'error' ? <AlertCircle size={20} /> : <Bot size={20} />}
                    </div>

                    {/* Message Bubble */}
                    <div className="flex flex-col gap-1 max-w-[80%] relative group">
                      <div className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? `bg-[#006C35] text-white shadow-md rounded-tr-sm` 
                          : m.role === 'error'
                          ? `bg-red-50 text-red-700 border border-red-100 rounded-tl-sm`
                          : `bg-slate-50 border border-slate-100 text-slate-700 rounded-tl-sm`
                      } text-left`}>
                        {m.role === 'assistant' ? (
                          <MarkdownRenderer content={m.content} />
                        ) : (
                          <div className="whitespace-pre-wrap">{m.content}</div>
                        )}
                      </div>
                      
                      {/* Copy Button */}
                      {(m.role === 'assistant' || m.role === 'error') && (
                        <button 
                          onClick={() => handleCopy(m.content, i)}
                          className="absolute top-2 -right-8 p-1.5 text-slate-400 hover:text-[#006C35] transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                          title="Copy Message"
                        >
                          {copiedIndex === i ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      )}
                    </div>

                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-[#006C35] flex items-center justify-center shrink-0">
                      <Bot size={20} />
                    </div>
                    <div className="px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-slate-500 italic rounded-tl-sm">
                      <Loader2 size={16} className="animate-spin" /> {t('hero_consulting')}
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-md border border-slate-200 flex items-center focus-within:ring-2 focus-within:ring-[#006C35]/20 transition-shadow">
            <div className="px-4 text-slate-400">
              {hasInteracted ? <MessageCircleIcon /> : <Search size={24} />}
            </div>
            <input 
              type="text" 
              placeholder={hasInteracted ? t('hero_follow_up') : t('ask_ai_placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleChatSubmit();
              }}
              className="flex-1 bg-transparent border-none outline-none py-3 text-lg text-slate-900 placeholder-slate-400 text-left"
              disabled={isLoading}
            />
            <button 
              onClick={() => handleChatSubmit()}
              disabled={isLoading || !query.trim()}
              className="btn-primary disabled:opacity-50 flex items-center gap-2"
            >
              {hasInteracted ? (
                <><Send size={18} /> <span className="hidden sm:inline">{t('hero_send')}</span></>
              ) : (
                t('ask_expert')
              )}
            </button>
          </div>
        </div>

        {/* Quick Links (hide if chatting) */}
        {!messages.some(m => m.role === "user") && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <QuickLink icon={<Scale size={16}/>} label={t('labor_law')} onClick={() => handleChatSubmit("Explain the basics of Saudi Labor Law")} />
            <QuickLink icon={<FileText size={16}/>} label={t('contract_rules')} onClick={() => handleChatSubmit("What are the rules for employment contracts in KSA?")} />
            <QuickLink icon={<ShieldCheck size={16}/>} label={t('worker_rights')} onClick={() => handleChatSubmit("What are the basic rights of an expatriate worker?")} />
          </div>
        )}

      </div>
    </section>
  );
}

function QuickLink({ icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:text-[#006C35] hover:border-[#006C35] transition-colors shadow-sm"
    >
      {icon}
      {label}
    </button>
  );
}

function MessageCircleIcon() {
  return (
    <MessageCircle size={24} />
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  // Simple parser for bold, headers, and bullet points
  const lines = content.split('\n');
  
  return (
    <div className="space-y-2 text-left">
      {lines.map((line, i) => {
        let trimmedLine = line.trim();
        
        // Headings
        if (trimmedLine.startsWith('### ')) {
          return <h3 key={i} className="text-base font-bold mt-4 mb-2 text-slate-900">{trimmedLine.replace('### ', '')}</h3>;
        }
        if (trimmedLine.startsWith('## ')) {
          return <h2 key={i} className="text-lg font-bold mt-5 mb-3 text-slate-900 border-b border-slate-100 pb-1">{trimmedLine.replace('## ', '')}</h2>;
        }
        if (trimmedLine.startsWith('# ')) {
          return <h1 key={i} className="text-xl font-bold mt-6 mb-4 text-slate-900">{trimmedLine.replace('# ', '')}</h1>;
        }
        
        // Bullet points
        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.substring(2);
          return (
            <div key={i} className="flex gap-2 mb-1">
              <span className="text-[#006C35] font-bold">•</span>
              <span className="flex-1">{parseBold(text)}</span>
            </div>
          );
        }

        // Empty lines
        if (!trimmedLine) return <div key={i} className="h-2" />;

        // Regular text with bold parsing
        return <p key={i} className="mb-2 leading-relaxed">{parseBold(line)}</p>;
      })}
    </div>
  );
}

function parseBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

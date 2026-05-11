"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Type, 
  BookOpen, 
  Hash, 
  Plus, 
  Trash2, 
  Download,
} from "lucide-react";

// --- Shared Helper Components ---

function RelatedToolLink({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#006C35] transition-all cursor-pointer group">
      <span className="text-sm font-bold text-slate-600 group-hover:text-[#006C35]">{label}</span>
      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#006C35] group-hover:translate-x-1 transition-all" />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 pb-4">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-sm font-bold text-slate-700 group-hover:text-[#006C35] transition-colors">{question}</span>
        <Plus size={16} className={`transition-transform ${open ? 'rotate-45' : ''}`} />
      </button>
      {open && <p className="text-xs text-slate-500 mt-2 leading-relaxed font-light">{answer}</p>}
    </div>
  );
}

// --- Main Page Component ---
export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<"writing" | "readability" | "frequency">("writing");

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Navigation Breadcrumb / Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#006C35]">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[#006C35]">Writing Utilities</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#006C35] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Professional <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006C35] to-[#00a351]">Writing Hub</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
            Advanced writing analysis and word tracking utilities. <br className="hidden md:block"/>
            <span className="text-[#006C35] font-bold">Fast. Private. 100% Free.</span>
          </p>
          
          {/* Quick Category Switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <QuickTab active={activeTab === 'writing'} label="Word Counter" onClick={() => setActiveTab("writing")} />
            <QuickTab active={activeTab === 'readability'} label="Readability Analysis" onClick={() => setActiveTab("readability")} />
            <QuickTab active={activeTab === 'frequency'} label="Frequency Check" onClick={() => setActiveTab("frequency")} />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Writing Tools</h3>
            <div className="space-y-1">
              <SidebarLink icon={<Type size={18}/>} label="Word Counter" active={activeTab === 'writing'} onClick={() => setActiveTab("writing")} />
              <SidebarLink icon={<BookOpen size={18}/>} label="Readability" active={activeTab === 'readability'} onClick={() => setActiveTab("readability")} />
              <SidebarLink icon={<Hash size={18}/>} label="Frequency Check" active={activeTab === 'frequency'} onClick={() => setActiveTab("frequency")} />
            </div>
          </div>
        </div>

        {/* Main Tool Area */}
        <div className="lg:col-span-3 space-y-12">
          <div className="min-h-[600px]">
            {activeTab === "writing" && <WordCounterFull />}
            {activeTab === "readability" && <ReadabilityAnalyzerFull />}
            {activeTab === "frequency" && <FrequencyCounterFull />}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickTab({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-3 rounded-2xl text-sm font-black transition-all duration-300 ${
        active 
          ? 'bg-[#006C35] text-white shadow-xl shadow-[#006C35]/20 scale-105' 
          : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
      }`}
    >
      {label}
    </button>
  );
}

// --- Sidebar Link Component ---
function SidebarLink({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
        active 
          ? 'bg-[#006C35]/10 text-[#006C35] border border-[#006C35]/20' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
      }`}
    >
      <span className={active ? 'text-[#006C35]' : 'text-slate-400'}>{icon}</span>
      {label}
    </button>
  );
}

// --- Word Counter Implementation ---
function WordCounterFull() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState(500);

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed.length > 0 ? trimmed.split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words / 200);
    
    // Flesch Reading Ease
    const syllables = text.toLowerCase().match(/[aeiouy]{1,2}/g)?.length || 0;
    const ease = words > 0 && sentences > 0 
      ? (206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))).toFixed(1)
      : "0.0";
    
    return { words, charsWithSpaces, charsNoSpaces, sentences, paragraphs, readingTime, ease };
  }, [text]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Type className="text-[#006C35]" /> Word & Character Counter
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-light">Real‑time counts, readability scores, and performance tracking.</p>
          </div>
          <div className="flex gap-2">
             <button onClick={() => setText("")} className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:text-red-500 transition-colors"><Trash2 size={20}/></button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <textarea 
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            className="w-full h-80 p-6 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-[#006C35] transition-all text-lg font-light leading-relaxed text-slate-700"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             <StatBox label="Words" val={stats.words} color="text-[#006C35]" />
             <StatBox label="Chars (Spaces)" val={stats.charsWithSpaces} />
             <StatBox label="Chars (No Spc)" val={stats.charsNoSpaces} />
             <StatBox label="Sentences" val={stats.sentences} />
             <StatBox label="Paragraphs" val={stats.paragraphs} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">🎯 Word Goal Progress</label>
                   <div className="flex items-center gap-2">
                     <span className="text-xs font-bold text-slate-400">Target:</span>
                     <input type="number" value={target} onChange={e => setTarget(Number(e.target.value))} className="w-20 text-right bg-slate-50 px-3 py-1 rounded-lg font-black text-[#006C35] border border-slate-100 focus:ring-0" />
                   </div>
                </div>
                <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                   <div 
                     className="h-full bg-gradient-to-r from-[#006C35] to-[#00E676] transition-all duration-700 ease-out shadow-[0_0_20px_rgba(0,230,118,0.3)]"
                     style={{ width: `${Math.min((stats.words / target) * 100, 100)}%` }}
                   ></div>
                   <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-900 uppercase mix-blend-overlay">
                      {stats.words} / {target} ({(Math.min((stats.words/target)*100, 100)).toFixed(0)}%)
                   </div>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-sm text-center">
                   <div className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Reading Time</div>
                   <div className="text-3xl font-black text-slate-900 tracking-tight">{stats.readingTime} <span className="text-sm font-medium text-slate-400">min</span></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 shadow-sm text-center">
                   <div className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Readability</div>
                   <div className="text-3xl font-black text-[#006C35] tracking-tight">{stats.ease}</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <FAQItem question="How do you count words?" answer="We split text by whitespace characters. Each unique string between spaces is counted as one word." />
            <FAQItem question="What is Flesch Reading Ease?" answer="It is a score that indicates how easy a text is to read. Higher scores (60-70) mean plain English." />
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Features of Our Word Counter</h3>
          <ul className="space-y-2 text-sm text-slate-600 font-light">
            <li className="flex gap-2">✓ Real-time updates as you type</li>
            <li className="flex gap-2">✓ Sentence and paragraph detection</li>
            <li className="flex gap-2">✓ Reading time estimate (200 wpm)</li>
            <li className="flex gap-2">✓ Automated readability scoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, val, color = "text-slate-700" }: { label: string, val: number, color?: string }) {
  return (
    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
       <div className="text-[10px] font-black uppercase text-slate-400 mb-1">{label}</div>
       <div className={`text-2xl font-black ${color}`}>{val.toLocaleString()}</div>
    </div>
  );
}

// --- Readability Analyzer Implementation ---
function ReadabilityAnalyzerFull() {
  const [text, setText] = useState("");
  const [highlighting, setHighlighting] = useState(false);

  const analysis = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const syllableCount = text.toLowerCase().match(/[aeiouy]{1,2}/g)?.length || 0;
    const charCount = text.length;

    const wCount = words.length;
    const sCount = sentences.length;
    const sylCount = syllableCount;

    if (wCount === 0 || sCount === 0) return null;

    const fleschEase = 206.835 - (1.015 * (wCount / sCount)) - (84.6 * (sylCount / wCount));
    const fleschGrade = (0.39 * (wCount / sCount) + 11.8 * (sylCount / wCount) - 15.59);
    const gunningFog = 0.4 * ((wCount / sCount) + 100 * (words.filter(w => w.length > 7).length / wCount)); 
    const colemanLiau = (0.0588 * (charCount / wCount * 100) - 0.296 * (sCount / wCount * 100) - 15.8);

    return { 
      fleschEase: fleschEase.toFixed(1), 
      fleschGrade: fleschGrade.toFixed(1), 
      gunningFog: gunningFog.toFixed(1),
      colemanLiau: colemanLiau.toFixed(1),
      sentences: sentences.map(s => ({ text: s.trim(), length: s.trim().split(/\s+/).length }))
    };
  }, [text]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <BookOpen className="text-cyan-500" /> Readability Analyzer
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-light">Measure text complexity with scientific metrics.</p>
        </div>

        <div className="p-8 space-y-6">
          <textarea 
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste your text below to see score..."
            className="w-full h-48 p-6 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-cyan-500 font-light"
          />

          {analysis ? (
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <ScoreCard label="Flesch Ease" score={analysis.fleschEase} desc={Number(analysis.fleschEase) > 60 ? "Plain English" : "Academic"} />
                 <ScoreCard label="Flesch Grade" score={analysis.fleschGrade} desc={`Grade ${Math.round(Number(analysis.fleschGrade))}`} />
                 <ScoreCard label="Gunning Fog" score={analysis.gunningFog} desc="Years of Education" />
                 <ScoreCard label="Coleman-Liau" score={analysis.colemanLiau} desc="Technical Level" />
              </div>

              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">🔍 Sentence Breakdown</label>
                    <button onClick={() => setHighlighting(!highlighting)} className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${highlighting ? 'bg-cyan-500 text-slate-900' : 'bg-slate-100 text-slate-500'}`}>
                      {highlighting ? 'Highlighting On' : 'Highlighting Off'}
                    </button>
                 </div>
                 <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                    {analysis.sentences.map((s, i) => (
                      <div key={i} className={`p-3 rounded-xl border text-sm font-light transition-all ${highlighting && s.length > 20 ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-100'}`}>
                        <span className="font-bold text-[10px] text-slate-400 mr-2 uppercase">S{i+1}:</span>
                        {s.text} <span className="text-[10px] text-slate-400 ml-2 italic">({s.length} words)</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 italic font-light">
               Waiting for text input to begin analysis...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ScoreCard({ label, score, desc }: { label: string, score: string, desc: string }) {
  return (
    <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 text-center">
       <div className="text-[10px] font-black uppercase text-slate-400 mb-2">{label}</div>
       <div className="text-3xl font-black text-slate-800">{score}</div>
       <div className="text-[10px] font-bold text-cyan-600 mt-1 uppercase tracking-tight">{desc}</div>
    </div>
  );
}

// --- Frequency Counter Implementation ---
function FrequencyCounterFull() {
  const [text, setText] = useState("");
  const [filterCommon, setFilterCommon] = useState(true);

  const freq = useMemo(() => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
    const stopWords = new Set(["the", "is", "at", "which", "and", "a", "of", "to", "in", "that", "it", "with", "as", "for", "on", "was", "by", "this", "be", "an", "are", "but", "not", "or", "from"]);
    const counts: Record<string, number> = {};
    
    words.forEach(w => {
      if (filterCommon && stopWords.has(w)) return;
      counts[w] = (counts[w] || 0) + 1;
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([word, count]) => ({
        word,
        count,
        percent: ((count / (words.length || 1)) * 100).toFixed(2)
      }));
  }, [text, filterCommon]);

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Hash className="text-orange-500" /> Essay Repetition Checker
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-light">Identify overused words to improve vocabulary and writing style.</p>
        </div>

        <div className="p-8 space-y-6">
           <textarea 
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste your essay here..."
            className="w-full h-48 p-6 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-light"
          />

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <input type="checkbox" checked={filterCommon} onChange={e => setFilterCommon(e.target.checked)} className="rounded" />
                <label className="text-xs font-bold text-slate-500">Filter common words</label>
             </div>
             <div className="text-[10px] font-black text-slate-400 uppercase">Total Words: {text.split(/\s+/).filter(w => w).length}</div>
          </div>

          <div className="border border-slate-100 rounded-2xl overflow-hidden">
             <table className="w-full text-left">
                <thead className="bg-slate-50 text-xs font-black uppercase text-slate-400 tracking-widest">
                   <tr>
                      <th className="p-4">Word</th>
                      <th className="p-4">Occurrences</th>
                      <th className="p-4 text-right">Repetition Rate (%)</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                   {freq.slice(0, 10).map((f, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                         <td className="p-4 font-bold text-slate-700">{f.word}</td>
                         <td className="p-4">
                            <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-bold">{f.count} times</span>
                         </td>
                         <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-3">
                               <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-orange-500" style={{ width: `${Math.min(parseFloat(f.percent)*10, 100)}%` }}></div>
                               </div>
                               <span className="font-bold text-xs">{f.percent}%</span>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  );
}

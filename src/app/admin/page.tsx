"use client";

import React, { useState, useEffect } from "react";
import { Trash2, ShieldAlert, CheckCircle, RefreshCw, User, MessageCircle, AlertTriangle, Copy } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Thread {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_email: string;
  created_at: string;
  category?: string;
  likes?: number;
  author_avatar?: string;
  replies?: any[];
}

export default function AdminDashboard() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [activeTab, setActiveTab] = useState<"moderation" | "guides">("moderation");
  const [newGuide, setNewGuide] = useState({ title: "", description: "", category: "Work & Visa System", href: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ADMIN_EMAILS = ["ksa.helpdesk.info@gmail.com", "mohammad@example.com", "mohammad@example.org"]; // Added another admin for testing
  const GUIDE_CATEGORIES = ["Work & Visa System", "Salary & Finance", "Life & Rights", "Family & Education", "Travel & Tourism", "Religion & Community"];

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    // Check for secret password access first
    const secret = localStorage.getItem("admin_secret");
    if (secret === "vddf2jjwm3x7p27frhrt8bvht") {
      setIsAdmin(true);
      setAdminEmail("Secret Access Admin");
      fetchThreads();
      fetchGuides();
      return;
    }

    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (user && ADMIN_EMAILS.includes(user.email || "")) {
      setIsAdmin(true);
      setAdminEmail(user.email || "");
      fetchThreads();
      fetchGuides();
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  };

  const fetchThreads = async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("threads")
        .select(`
          *,
          replies (*)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setThreads(data);
    } catch (err: any) {
      console.error("Error fetching threads:", err);
      alert("Failed to fetch community content: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchGuides = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("guides")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setGuides(data);
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post? This will permanently remove it from the database.")) return;
    const { error } = await supabase.from("threads").delete().eq("id", id);
    if (!error) {
      setThreads(threads.filter(t => t.id !== id));
      alert("Post deleted permanently.");
    } else {
      console.error("Delete error:", error);
      alert("Failed to delete post: " + error.message + "\n\nImportant: If this post has replies, you must ensure 'ON DELETE CASCADE' is enabled in your Supabase foreign key settings.");
    }
  };

  const handleDeleteReply = async (replyId: string, threadId: string) => {
    if (!confirm("Are you sure you want to delete this reply?")) return;
    const { error } = await supabase.from("replies").delete().eq("id", replyId);
    if (!error) {
      setThreads(threads.map(t => {
        if (t.id === threadId) {
          return { ...t, replies: t.replies?.filter((r: any) => r.id !== replyId) };
        }
        return t;
      }));
      alert("Reply deleted permanently.");
    } else {
      console.error("Delete reply error:", error);
      alert("Failed to delete reply: " + error.message);
    }
  };

  const handleAddGuide = async () => {
    if (!newGuide.title || !newGuide.description || !newGuide.href) {
      alert("Please fill in all guide fields.");
      return;
    }
    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("guides")
      .insert([newGuide])
      .select();

    if (error) {
      alert("Error adding guide: " + error.message);
    } else if (data) {
      setGuides([data[0], ...guides]);
      setNewGuide({ title: "", description: "", category: "Work & Visa System", href: "" });
      alert("Guide added permanently!");
    }
    setIsSubmitting(false);
  };

  const handleDeleteGuide = async (id: string) => {
    if (!confirm("Delete this guide entry?")) return;
    const { error } = await supabase.from("guides").delete().eq("id", id);
    if (!error) {
      setGuides(guides.filter(g => g.id !== id));
      alert("Guide removed permanently.");
    } else {
      alert("Error deleting guide: " + error.message);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Content copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <RefreshCw className="animate-spin text-[#006C35]" size={32} />
      </div>
    );
  }

  if (!supabase || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
          <ShieldAlert size={64} className={`${!supabase ? 'text-amber-500' : 'text-red-500'} mx-auto mb-6`} />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            {!supabase ? 'Configuration Required' : 'Access Denied'}
          </h1>
          <p className="text-slate-600 mb-8 font-light leading-relaxed">
            {!supabase 
              ? "The Admin dashboard requires a Supabase connection to manage community content. Please configure your .env.local file with your API keys."
              : "You do not have administrative privileges to access this dashboard."}
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="btn-primary w-full"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-left">
      <header className="bg-white border-b border-slate-200 pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest mb-2">
              <ShieldAlert size={16} /> Admin Control Panel
            </div>
            <h1 className="text-3xl font-bold text-slate-900">System Management</h1>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-slate-900">{adminEmail}</div>
            <div className="text-xs text-[#006C35] font-semibold">Administrator Access</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex gap-8">
          <button 
            onClick={() => setActiveTab("moderation")}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === "moderation" ? "border-[#006C35] text-[#006C35]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
          >
            Community Moderation
          </button>
          <button 
            onClick={() => setActiveTab("guides")}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === "guides" ? "border-[#006C35] text-[#006C35]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
          >
            Guide Management
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {activeTab === "moderation" ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest">Author</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest">Topic</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {threads.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
                        No discussions found in the database.
                      </td>
                    </tr>
                  ) : (
                    threads.map((thread) => (
                      <React.Fragment key={thread.id}>
                        <tr className="hover:bg-slate-50/50 transition-colors border-b border-slate-100">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <User size={16} />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900">{thread.author_name}</div>
                                <div className="text-[10px] text-slate-400">{thread.author_email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-slate-900 mb-1">{thread.title}</div>
                            <div className="text-xs text-slate-500 truncate max-w-md font-light">{thread.content}</div>
                            {thread.replies && thread.replies.length > 0 && (
                              <div className="mt-2 text-[10px] font-black text-[#006C35] uppercase tracking-widest bg-[#006C35]/5 inline-block px-2 py-0.5 rounded">
                                {thread.replies.length} Replies
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-400">
                            {new Date(thread.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => handleCopy(thread.content)}
                                className="p-2 text-slate-300 hover:text-[#006C35] hover:bg-[#006C35]/5 rounded-lg transition-all"
                                title="Copy Content"
                              >
                                <Copy size={18} />
                              </button>
                              <button 
                                onClick={() => handleDeletePost(thread.id)}
                                className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                title="Delete Post"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                        {/* Sub-table for replies */}
                        {thread.replies && thread.replies.map((reply: any) => (
                          <tr key={reply.id} className="bg-slate-50/30 border-b border-slate-100/50">
                            <td className="px-6 py-3 pl-12">
                              <div className="flex items-center gap-2">
                                <MessageCircle size={14} className="text-slate-300" />
                                <span className="text-[10px] font-bold text-slate-500">{reply.author_name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="text-[11px] text-slate-600 italic font-light">{reply.content}</div>
                            </td>
                            <td className="px-6 py-3 text-[10px] text-slate-400">
                               {new Date(reply.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-3 text-right">
                               <div className="flex justify-end gap-2">
                                 <button 
                                  onClick={() => handleCopy(reply.content)}
                                  className="p-1.5 text-slate-300 hover:text-[#006C35] hover:bg-[#006C35]/5 rounded transition-all"
                                  title="Copy Content"
                                 >
                                   <Copy size={14} />
                                 </button>
                                 <button 
                                  onClick={() => handleDeleteReply(reply.id, thread.id)}
                                  className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                                  title="Delete Reply"
                                 >
                                   <Trash2 size={14} />
                                 </button>
                               </div>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Add Guide Form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Add New Guide Entry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Guide Title</label>
                  <input 
                    type="text" 
                    value={newGuide.title}
                    onChange={(e) => setNewGuide({...newGuide, title: e.target.value})}
                    placeholder="e.g. New Labor Law Update"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Category</label>
                  <select 
                    value={newGuide.category}
                    onChange={(e) => setNewGuide({...newGuide, category: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 font-bold"
                  >
                    {GUIDE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Short Description</label>
                  <textarea 
                    value={newGuide.description}
                    onChange={(e) => setNewGuide({...newGuide, description: e.target.value})}
                    placeholder="Provide a brief summary of what this guide covers..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 font-light resize-none h-24"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Guide Link (HREF)</label>
                  <input 
                    type="text" 
                    value={newGuide.href}
                    onChange={(e) => setNewGuide({...newGuide, href: e.target.value})}
                    placeholder="e.g. /new-guide-page or https://external-link.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 font-mono text-xs"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleAddGuide}
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-3 flex items-center gap-2"
                >
                  {isSubmitting ? <RefreshCw className="animate-spin" size={18} /> : <CheckCircle size={18} />}
                  Save Guide Permanently
                </button>
              </div>
            </div>

            {/* List of Dynamic Guides */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Dynamic Guides</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/30 border-b border-slate-200">
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Title</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {guides.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-slate-400 text-sm">
                          No dynamic guides added yet.
                        </td>
                      </tr>
                    ) : (
                      guides.map((guide) => (
                        <tr key={guide.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-slate-900">{guide.title}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{guide.href}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-blue-50 text-blue-600">
                              {guide.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => handleDeleteGuide(guide.id)}
                              className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

        <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
           <AlertTriangle className="text-amber-500 shrink-0" size={20} />
           <p className="text-xs text-amber-800 leading-relaxed">
             <strong>Warning:</strong> Deleting a post will also permanently remove all associated replies from the database. This action cannot be undone.
           </p>
        </div>
      </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { 
  MessageSquare, Users, Send, Share2, MessageCircle, MoreHorizontal, 
  ShieldCheck, LogIn, ChevronDown, Flag, LogOut, RefreshCw, AlertTriangle,
  Bold, Italic, Underline, Heading1, Heading2, Image, ImageIcon 
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { supabase } from "@/lib/supabase";

interface Reply {
  id: string;
  author_name: string;
  author_avatar: string;
  content: string;
  created_at: string;
}

interface Thread {
  id: string;
  author_name: string;
  author_avatar: string;
  author_email: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  created_at: string;
  replies?: Reply[];
}

export default function CommunityChatPage() {
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [threads, setThreads] = useState<Thread[]>([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const categories = ["All", "Labor Law", "Visa & Iqama", "Jobs & Careers", "General Discussion"];

  // Helper to safely render formatted text (Bold, Italic, Underline)
  const renderContent = (text: string) => {
    if (!text) return null;
    // Replace # header, ## header, image, link, **bold**, *italic*, __underline__
    const formatted = text
      .replace(/^# (.*?)$/gm, '<h1 class="text-2xl font-bold mb-4 mt-2">$1</h1>')
      .replace(/^## (.*?)$/gm, '<h2 class="text-xl font-bold mb-3 mt-2">$1</h2>')
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-xl border border-slate-200 my-4 max-h-[400px] object-cover w-full" />')
      .replace(/(https?:\/\/[^\s!]+)/g, (url) => {
        // Don't wrap images in <a> tags
        if (url.match(/\.(jpeg|jpg|gif|png|svg)$/) || url.includes('supabase.co/storage/v1/object/public/post-images')) return url;
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline break-all">${url}</a>`;
      })
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>');
    
    return <div 
      className="whitespace-pre-wrap break-words" 
      dangerouslySetInnerHTML={{ __html: formatted }} 
    />;
  };

  const handleInputResize = (e: any) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const applyFormatting = (type: 'bold' | 'italic' | 'underline' | 'h1' | 'h2', isReply: boolean = false) => {
    const textarea = document.getElementById(isReply ? 'reply-textarea' : 'post-textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    
    let formatted = "";
    if (type === 'bold') formatted = `**${selectedText}**`;
    if (type === 'italic') formatted = `*${selectedText}*`;
    if (type === 'underline') formatted = `__${selectedText}__`;
    if (type === 'h1') formatted = `\n# ${selectedText}`;
    if (type === 'h2') formatted = `\n## ${selectedText}`;

    const newText = text.substring(0, start) + formatted + text.substring(end);
    
    if (isReply) {
      setReplyContent(newText);
    } else {
      setNewPostContent(newText);
    }
    
    // Reset focus
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + formatted.length, start + formatted.length);
    }, 0);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, isReply: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file || !supabase) return;

    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file.");
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('post-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('post-images')
        .getPublicUrl(filePath);

      const imageMarkdown = `\n![image](${publicUrl})\n`;
      
      if (isReply) {
        setReplyContent(prev => prev + imageMarkdown);
      } else {
        setNewPostContent(prev => prev + imageMarkdown);
      }
    } catch (err: any) {
      alert("Error uploading image: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (!supabase) return;

    // Initial check
    checkUser();
    fetchThreads();

    // Listen for auth changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null);
      if (_event === 'SIGNED_IN') fetchThreads();
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  const fetchThreads = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("threads")
      .select(`
        *,
        replies (*)
      `)
      .order("created_at", { ascending: false });

    if (data) setThreads(data);
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/community-chat'
      }
    });
    if (error) alert("Login error: " + error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleCreatePost = async () => {
    if (!user) return;
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("threads")
      .insert([
        {
          title: newPostTitle,
          content: newPostContent,
          category: activeCategory === "All" ? "General Discussion" : activeCategory,
          author_name: user.user_metadata.full_name || user.email,
          author_avatar: user.user_metadata.avatar_url,
          author_email: user.email,
          likes: 0
        }
      ])
      .select();

    if (data) {
      setThreads([data[0], ...threads]);
      setNewPostTitle("");
      setNewPostContent("");
    }
    setIsSubmitting(false);
  };

  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleCreateReply = async (threadId: string) => {
    if (!user || !replyContent.trim()) return;

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("replies")
      .insert([
        {
          thread_id: threadId,
          content: replyContent,
          author_name: user.user_metadata.full_name || user.email,
          author_avatar: user.user_metadata.avatar_url,
          author_email: user.email
        }
      ])
      .select();

    if (data) {
      setThreads(threads.map(t => {
        if (t.id === threadId) {
          return { ...t, replies: [...(t.replies || []), data[0]] };
        }
        return t;
      }));
      setReplyContent("");
      setReplyingTo(null);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-left">
      
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] text-xs font-semibold uppercase tracking-wide mb-4">
                <Users size={16} /> {t('community_subtitle')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                {t('community_title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
                {t('community_desc')}
              </p>
            </div>
            
            {user ? (
              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-sm">
                <img src={user.user_metadata.avatar_url} alt="avatar" className="w-10 h-10 rounded-full border border-white shadow-sm" />
                <div className="pr-4">
                  <div className="text-sm font-bold text-slate-900">{user.user_metadata.full_name}</div>
                  <button onClick={handleLogout} className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 flex items-center gap-1">
                    <LogOut size={12} /> Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group font-bold text-slate-700"
              >
                <img src="https://www.google.com/favicon.ico" alt="google" className="w-5 h-5" />
                Sign in with Google
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Categories */}
        <aside className="hidden lg:block space-y-2">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 px-4">Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeCategory === cat ? "bg-[#006C35] text-white shadow-md shadow-[#006C35]/20" : "text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          
          {!supabase && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
              <AlertTriangle className="mx-auto text-amber-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Community Database Offline</h3>
              <p className="text-amber-800 text-sm font-light leading-relaxed max-w-md mx-auto">
                The community features require a Supabase connection. Please configure your <strong>.env.local</strong> file with your Supabase URL and API keys to enable discussions.
              </p>
            </div>
          )}
          
          {/* Post Creation Box */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                {user ? (
                  <img src={user.user_metadata.avatar_url} alt="me" />
                ) : (
                  <Users className="text-slate-400" size={20} />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Discussion Title"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full bg-slate-50 rounded-lg border border-slate-100 px-4 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 font-bold"
                  disabled={!user || isSubmitting}
                />
                <div className="flex items-center gap-2 mb-2">
                  <button 
                    onClick={() => applyFormatting('bold')}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Bold"
                  >
                    <Bold size={14} />
                  </button>
                  <button 
                    onClick={() => applyFormatting('italic')}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Italic"
                  >
                    <Italic size={14} />
                  </button>
                  <button 
                    onClick={() => applyFormatting('underline')}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Underline"
                  >
                    <Underline size={14} />
                  </button>
                  <div className="w-px h-4 bg-slate-200 mx-1"></div>
                  <button 
                    onClick={() => applyFormatting('h1')}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Large Title"
                  >
                    <Heading1 size={14} />
                  </button>
                  <button 
                    onClick={() => applyFormatting('h2')}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Medium Title"
                  >
                    <Heading2 size={14} />
                  </button>
                  <div className="w-px h-4 bg-slate-200 mx-1"></div>
                  <button 
                    onClick={() => document.getElementById('post-image-input')?.click()}
                    disabled={isUploading}
                    className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors flex items-center gap-1"
                    title="Upload Image"
                  >
                    {isUploading ? <RefreshCw size={14} className="animate-spin" /> : <ImageIcon size={14} />}
                  </button>
                  <input 
                    id="post-image-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                    className="hidden"
                  />
                  <span className="text-[10px] text-slate-400 ml-2">Tip: Use # for large text</span>
                </div>
                <textarea
                  id="post-textarea"
                  placeholder={t('community_post_placeholder')}
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  onInput={handleInputResize}
                  className="w-full bg-slate-50 rounded-xl border border-slate-100 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 transition-all resize-none min-h-[100px] overflow-hidden"
                  disabled={!user || isSubmitting}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-slate-400">
                    {!user && (
                      <span className="flex items-center gap-1 font-medium">
                        <ShieldCheck size={14} className="text-amber-500" /> {t('community_login_required')}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={handleCreatePost}
                    disabled={!user || !newPostTitle.trim() || !newPostContent.trim() || isSubmitting}
                    className="btn-primary flex items-center gap-2 py-2 px-6 text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? <><RefreshCw size={16} className="animate-spin" /> Posting...</> : <>Post <Send size={16} /></>}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Discussion List */}
          <div className="space-y-6">
            {threads.filter(t => activeCategory === "All" || t.category === activeCategory).map((thread) => (
              <div key={thread.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-[#006C35]/30 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                        <img src={thread.author_avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Anon"} alt="avatar" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{thread.author_name}</span>
                          {thread.author_email.includes("@gmail.com") && (
                            <span className="bg-[#006C35]/10 text-[#006C35] text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded flex items-center gap-1">
                              <ShieldCheck size={10} /> Verified
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">{new Date(thread.created_at).toLocaleDateString()} • {thread.category}</span>
                      </div>
                    </div>
                    <button className="text-slate-300 hover:text-slate-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#006C35] transition-colors">
                    {thread.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {renderContent(thread.content)}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                    <button 
                      onClick={() => setReplyingTo(replyingTo === thread.id ? null : thread.id)}
                      className="flex items-center gap-2 text-slate-500 hover:text-[#006C35] transition-colors text-sm font-semibold"
                    >
                      <MessageCircle size={18} /> {thread.replies?.length || 0} {t('community_reply')}
                    </button>
                    <button className="flex items-center gap-2 text-slate-500 hover:text-[#006C35] transition-colors text-sm font-semibold">
                      <Share2 size={18} /> {t('community_share')}
                    </button>
                    <div className="ml-auto text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {thread.likes} Upvotes
                    </div>
                  </div>

                  {/* Reply Input */}
                  {replyingTo === thread.id && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0">
                         {user ? <img src={user.user_metadata.avatar_url} alt="me" /> : <Users className="text-slate-400" size={16} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          <button onClick={() => applyFormatting('bold', true)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><Bold size={12}/></button>
                          <button onClick={() => applyFormatting('italic', true)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><Italic size={12}/></button>
                          <button onClick={() => applyFormatting('underline', true)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><Underline size={12}/></button>
                          <button onClick={() => applyFormatting('h1', true)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><Heading1 size={12}/></button>
                          <button onClick={() => applyFormatting('h2', true)} className="p-1 hover:bg-slate-200 rounded text-slate-500"><Heading2 size={12}/></button>
                          <div className="w-px h-3 bg-slate-200 mx-1"></div>
                          <button 
                            onClick={() => document.getElementById('reply-image-input')?.click()}
                            disabled={isUploading}
                            className="p-1 hover:bg-slate-200 rounded text-slate-500"
                          >
                            {isUploading ? <RefreshCw size={12} className="animate-spin" /> : <ImageIcon size={12} />}
                          </button>
                          <input 
                            id="reply-image-input"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, true)}
                            className="hidden"
                          />
                        </div>
                        <textarea 
                          id="reply-textarea"
                          placeholder="Write a reply..."
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          onInput={handleInputResize}
                          className="w-full bg-slate-50 rounded-xl border border-slate-100 p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#006C35] transition-all resize-none min-h-[60px] overflow-hidden"
                          disabled={!user || isSubmitting}
                        />
                        <div className="flex justify-end mt-2">
                           <button 
                            onClick={() => handleCreateReply(thread.id)}
                            disabled={!user || !replyContent.trim() || isSubmitting}
                            className="bg-[#006C35] text-white text-[10px] font-bold px-4 py-1.5 rounded-lg hover:bg-[#005a2c] transition-all disabled:opacity-50"
                           >
                             {isSubmitting ? "Posting..." : "Reply"}
                           </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Replies Section */}
                  {thread.replies && thread.replies.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                      {thread.replies.map((reply) => (
                        <div key={reply.id} className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0">
                            <img src={reply.author_avatar} alt="avatar" />
                          </div>
                          <div className="bg-slate-50 rounded-2xl p-4 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-slate-900">{reply.author_name}</span>
                              <span className="text-[10px] text-slate-400">{new Date(reply.created_at).toLocaleDateString()}</span>
                            </div>
                            <div className="text-xs text-slate-600 leading-relaxed font-light">
                              {renderContent(reply.content)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

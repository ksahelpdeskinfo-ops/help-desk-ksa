import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 bg-[#006C35]/10 text-[#006C35] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Search size={48} />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary flex items-center justify-center gap-2 py-3 px-8">
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/resources" className="btn-secondary py-3 px-8">
            View All Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

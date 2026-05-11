import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saudi Workers Guide: The Ultimate Labor Law Library",
  description: "Access the complete library of Saudi labor law guides, residency rules, visa processing, and worker rights information.",
  keywords: ["Saudi workers guide", "Saudi labor system explained", "Saudi expat portal"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

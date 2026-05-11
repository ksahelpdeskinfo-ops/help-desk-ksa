import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Tools & Calculators | GPA, Grades & Writing Help",
  description: "Free online tools for students. Calculate GPA, weighted grades, and final exam targets. Professional word counter and readability analyzer.",
  keywords: ["GPA calculator", "weighted grade calculator", "final exam calculator", "word counter", "readability score"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

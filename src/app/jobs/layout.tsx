import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs in Saudi Arabia: Expat Career & Recruitment Portal",
  description: "Find the latest jobs in Saudi Arabia for expatriates. Secure CV upload and official career portal for professionals in KSA.",
  keywords: ["jobs in Saudi Arabia for expats", "Saudi career portal", "recruitment KSA", "Saudi job search"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

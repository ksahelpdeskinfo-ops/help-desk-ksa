import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EOSB Calculator Saudi Arabia: End of Service Benefit Guide",
  description: "Official End of Service Benefit (EOSB) calculator for Saudi Arabia. Calculate your final settlement and resignation dues according to Labor Law.",
  keywords: ["EOSB calculator Saudi Arabia", "end of service benefits KSA", "resignation settlement Saudi law"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

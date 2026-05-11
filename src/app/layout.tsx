import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { QuranAyat } from "@/components/quran-ayat";
import { FloatingSupport } from "@/components/floating-support";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://helpdesk.linux-aios.com'),
  title: {
    default: "Help Desk KSA | Labor Law, Iqama & Expat Guide",
    template: "%s | Help Desk KSA"
  },
  description: "Official guide to Saudi Arabia labor law, work permits, iqama renewals, and end-of-service benefits. Your interactive community for KSA expat life.",
  keywords: ["Saudi Arabia labor law", "Iqama renewal", "KSA Labor Law", "Saudi Expat Guide", "EOSB Calculator KSA", "Saudi Labor Office", "Help Desk KSA"],
  authors: [{ name: "Help Desk KSA Team" }],
  openGraph: {
    title: "Help Desk KSA | The Ultimate Saudi Expat Resource",
    description: "Expert guidance on Saudi Labor Law, Visas, and Expat life. Real-time community support.",
    url: "https://helpdesk.linux-aios.com",
    siteName: "Help Desk KSA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Desk KSA | Saudi Expat Guide",
    description: "Expert guidance on Saudi Labor Law and Expat life.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <QuranAyat />

              <main className="flex-grow pt-8 pb-16">
                {children}
              </main>

              <Footer />
              <FloatingSupport />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        {/* Tawk.to Script Integration */}
        <Script id="tawk-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            Tawk_API.onError = function(){};
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a00cf84d752791c35102a55/1jo9il7qi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s1.onerror=function(){};
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

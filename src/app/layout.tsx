import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 60; // seconds

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Freelance Frontend Developer & UI/UX Designer in Porto Alegre, Brazil (LATAM)",
  description:
    "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
  icons: {
    icon: "/img/henrique-pochmann-front-end-developer-ui-ux-designer-brazil.png",
  },
  alternates: {
    canonical: "https://henriquepcm.com/",
  },
  robots: "index, follow",

  keywords:
    "Henrique Pochmann, front-end, ui/ux, developer, designer, Porto Alegre, Brazil, LATAM",
  publisher: "Henrique Pochmann",
  openGraph: {
    title: "Front-end Developer & UI/UX Designer in Brazil (LATAM)",
    description:
      "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
    url: "https://henriquepcm.com",
    siteName: "henriquepcm.com",
    images: [
      {
        url: "https://henriquepcm.com/img/henrique-pochmann-frontend-developer.jpg",
        width: 4800,
        height: 2520,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Front-end Developer & UI/UX Designer in Porto Alegre, Brazil (LATAM)",
    description:
      "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
    images: [
      "https://henriquepcm.com/img/henrique-pochmann-frontend-developer.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is needed because ThemeProvider causes a hydration mismatch with ThemePicker.tsx
    // ThemeProvider is needed to prevent flicker on page load.
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="near-black">
          <div className="w-full max-w-[1920px]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}

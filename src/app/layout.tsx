import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
     subsets: ["latin"],
     display: "swap",
});

export const metadata: Metadata = {
     title: "Front-end Developer & UI/UX Designer in Brazil: Henrique Pochmann",
     description:
          "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, RS, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
     icons: {
          icon: "img/henrique-pochmann-front-end-developer-ui-ux-designer-brazil.png",
     },
     robots: "index, follow",
     keywords:
          "Henrique Pochmann, front-end, ui/ux, developer, Porto Alegre, Brazil, LATAM",
     publisher: "Henrique Pochmann",
     openGraph: {
          title: "Front-end Developer & UI/UX Designer in Brazil: Henrique Pochmann",
          description:
               "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, RS, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
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
          title: "Front-end Developer & UI/UX Designer in Brazil: Henrique Pochmann",
          description:
               "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, RS, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
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
          <html lang="en" className={inter.className}>
               <body>
                    {children}

                    <Script
                         id="email-js"
                         strategy="afterInteractive"
                         type="text/javascript"
                         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
                    ></Script>

                    <Script
                         src="https://www.googletagmanager.com/gtag/js?id=G-E01V9872F7"
                         strategy="afterInteractive"
                    ></Script>
                    <Script id="google-analytics" strategy="afterInteractive">
                         {` window.dataLayer = window.dataLayer || [];
                            function gtag() {
                              dataLayer.push(arguments);
                            }
                            gtag("js", new Date());
                            gtag("config", "G-E01V9872F7", { page_path: window.location.pathname,});`}
                    </Script>
               </body>
          </html>
     );
}

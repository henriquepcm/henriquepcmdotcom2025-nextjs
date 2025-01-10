import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
     subsets: ["latin"],
     display: "swap",
});

export const metadata: Metadata = {
     title: "Front-end Developer & UI/UX Designer in Brazil: Henrique Pochmann",
     description:
          "Henrique Pochmann is a Front-end Developer and UI/UX Designer based in Porto Alegre, RS, Brazil (LATAM), with over 10 years of experience. He specializes in working with modern technologies within the JavaScript ecosystem.",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en" className={inter.className}>
               <body>{children}</body>
          </html>
     );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/features/header/Header";
import Footer from "@/features/footer/Footer";
import { cookies } from "next/headers";
import CookieConsentBanner from "@/features/cookie-banner/CookieConsentBanner";

export const revalidate = 60; // seconds

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const title = "UI/UX Developer in Porto Alegre, Brazil, LATAM";

const description =
    "Henrique Pochmann is a UI/UX Developer based in Porto Alegre, Brazil, with over 10 years of experience.";

const imgUrl =
    "https://henriquepcm.com/img/henrique-pochmann-frontend-developer.jpg";

export const metadata: Metadata = {
    title,
    description,
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
        title,
        description,
        url: "https://henriquepcm.com",
        siteName: "henriquepcm.com",
        images: [
            {
                url: imgUrl,
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
        title,
        description,
        images: [imgUrl],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value || "near-black";

    return (
        <html
            lang="en"
            className={inter.className}
            data-theme={theme}
            data-scroll-behavior="smooth"
        >
            <body>
                <div className="flex w-full max-w-[1920px] flex-col items-center justify-center">
                    <Header />
                    <main className="w-full">{children}</main>
                    <Footer theme={theme} />
                </div>
                <CookieConsentBanner />
            </body>
        </html>
    );
}

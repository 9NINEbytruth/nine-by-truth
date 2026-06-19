import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mincho",
  display: "swap",
});

const gothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-gothic",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜東広島・西条の美容室`,
    template: `%s｜${site.name}`,
  },
  description:
    "東広島・西条の美容室 9NINE by truth。HOT PEPPER Beauty AWARD 6年連続SILVER Prize受賞。髪質改善・縮毛矯正・美髪メニュー。全席半個室・個室スパルーム完備。",
  keywords: [
    "美容室", "東広島", "西条", "髪質改善", "縮毛矯正", "韓国風", "個室", "9NINE by truth",
  ],
  openGraph: {
    title: `${site.name}｜東広島・西条の美容室`,
    description: "実績が証明する技術。また来たくなる空間。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${mincho.variable} ${gothic.variable} ${cormorant.variable} font-gothic`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

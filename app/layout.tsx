import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "FlatCircle • Premier Digital Marketing Agency in Nepal | Kathmandu",
  description:
    "FlatCircle is Nepal's leading performance digital marketing agency. We specialize in Meta & Google Ads, Local SEO, TikTok marketing, eCommerce funnels (eSewa/Khalti), and brand scaling in Kathmandu, Nepal.",
  keywords: [
    "Digital Marketing Agency Nepal",
    "Digital Marketing in Kathmandu",
    "SEO Services Nepal",
    "Facebook Ads Nepal",
    "TikTok Marketing Nepal",
    "Google Ads Agency Nepal",
    "Local SEO Kathmandu",
    "FlatCircle Agency Nepal",
  ],
  authors: [{ name: "FlatCircle Digital Agency Pvt. Ltd." }],
  icons: {
    icon: "/assets/Flatcircle-Logo.png",
    shortcut: "/assets/Flatcircle-Logo.png",
    apple: "/assets/Flatcircle-Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

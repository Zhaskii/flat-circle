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
  title: {
    default: "FlatCircle | Digital Marketing Agency in Nepal",
    template: "%s | FlatCircle",
  },
  description:
    "FlatCircle is a Nepal-based digital marketing agency for SEO, digital campaigns, social content, graphic design, websites, and ongoing optimization.",
  keywords: [
    "Digital Marketing Agency Nepal",
    "Digital Marketing Kathmandu",
    "SEO Services Nepal",
    "Graphic Design Nepal",
    "Social Media Marketing Nepal",
    "Digital Campaigns Nepal",
    "Website Design Nepal",
    "E-commerce Website Nepal",
    "FlatCircle Agency Nepal",
  ],
  authors: [{ name: "FlatCircle Digital Agency Pvt. Ltd." }],
  category: "Digital Marketing",
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "FlatCircle",
    title: "FlatCircle | Digital Marketing Agency in Nepal",
    description:
      "Strategy, SEO, campaigns, creative, and websites for ambitious Nepal-based brands.",
  },
  twitter: {
    card: "summary",
    title: "FlatCircle | Digital Marketing Agency in Nepal",
    description:
      "Strategy, SEO, campaigns, creative, and websites for ambitious Nepal-based brands.",
  },
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

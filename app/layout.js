import "./globals.css";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Khushal Rakholiya — Frontend Devloper",
  description: "Frontend Engineer and Web Designer.",
  generator: "Next.js",
  applicationName: "Khushal Rakholiya",
  colorScheme: "dark",
  openGraph: {
    title: "Khushal Rakholiya — Frontend Devloper",
    description: "Frontend Engineer and Web Designer.",
    url: "https://khushal-rakholiya.vercel.app/",
    siteName: "https://khushal-rakholiya.vercel.app/",
    locale: "en-US",
    type: "website",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

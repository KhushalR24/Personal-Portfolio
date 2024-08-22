import "./globals.css"
import { Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata = {
  title: "Khushal Rakholiya — Frontend Devloper",
  description:
    "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "Victor Williams",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio"
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Khushal Rakholiya — Frontend Devloper",
    description:
      "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url:
          "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Khushal Rakholiya — Frontend Devloper"
      }
    ],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushal Rakholiya — Frontend Devloper",
    description:
      "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png"
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "technology"
}

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
  )
}

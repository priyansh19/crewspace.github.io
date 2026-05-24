import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrewSpace — Build AI Companies, Not Just Chatbots",
  description:
    "CrewSpace is a control plane for autonomous AI-agent companies. Create AI organizations, hire agents, set budgets, enforce approvals, and delegate work — all from a single desktop app.",
  keywords: [
    "AI agents",
    "multi-agent orchestration",
    "AI company",
    "agent framework",
    "autonomous agents",
    "AI control plane",
    "open source",
  ],
  openGraph: {
    title: "CrewSpace — Build AI Companies, Not Just Chatbots",
    description:
      "The control plane for autonomous AI-agent companies. Local-first. Open source.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

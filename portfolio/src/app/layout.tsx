import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amritesh Anand | Interactive Reality Simulators",
  description: "Senior Software Architect & 3D Engineer building explorable models that turn complex systems into intuition.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Amritesh Anand | Interactive Reality Simulators",
    description: "Senior Software Architect & 3D Engineer building explorable models that turn complex systems into intuition.",
    type: "website",
    locale: "en_US",
    siteName: "Amritesh Anand Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#050508] text-slate-200 selection:bg-blue-500/30 selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

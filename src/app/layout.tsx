import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Portfólio single page com estética de IDE/Terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#050505] text-zinc-100">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-[#050505] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}

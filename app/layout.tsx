import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invest in IPOs (Initial Public Offering), Subscribe to IPOs Online | Ventura",
  description: "IPO Investment - Apply for an initial public offering (IPO) with Ventura. Check out all the analysis of upcoming & listed IPO, and Invest in IPO today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aye Finance | Empowering Micro-Entrepreneurs Across India",
  description:
    "Aye Finance is India's leading fintech NBFC, providing innovative financial solutions to micro and small businesses. Join us in driving financial inclusion and supporting entrepreneurship.",
  keywords:
    "Aye Finance, micro-entrepreneurs, NBFC, fintech, India, financial inclusion, small business loans, business growth",
  openGraph: {
    title: "Aye Finance | Empowering Micro-Entrepreneurs Across India",
    description:
      "Discover how Aye Finance supports micro and small businesses with tailored financial solutions, fostering entrepreneurship and economic growth across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Header from "@/components/layout/Header";
import "./globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={vazirmatn.className}>
      <body>
        <Header />
        <div className="mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import Header from "@/components/layout/Header";
import "./globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { Raleway, Vazirmatn } from "next/font/google";
import { useDictionary } from "./dictionaries";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Soheila Karimi",
  description: "Dr. Soheila Karimi's website",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let dict;
  try {
    dict = await useDictionary(params.lang);
  } catch (e) {
    notFound();
  }

  return (
    <html
      lang={params.lang}
      style={{
        direction: params.lang === "fa" ? "rtl" : "ltr",
        fontFamily:
          params.lang === "fa"
            ? vazirmatn.style.fontFamily
            : raleway.style.fontFamily,
      }}
    >
      <body>
        <NextIntlClientProvider locale={params.lang} messages={dict}>
          <Header lang={params.lang} dict={dict} />
          <div className="md:mt-22 mt-16 md:mx-auto">{children}</div>
          <Footer dict={dict} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
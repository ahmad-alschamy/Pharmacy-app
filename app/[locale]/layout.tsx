import type { Metadata } from "next";
import "../globals.css";

import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

import Navbar from "@/components/layout/Navbar";
import {manrope} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "NaturVital",
  description: "Modern pharmacy website",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
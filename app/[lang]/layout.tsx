import { notFound } from "next/navigation";
import { locales } from "../_lib/locales";
import { NextIntlClientProvider } from "next-intl";

export const dynamic = "force-static";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout(props: { children: React.ReactNode; params: { lang: string } }) {
  // Validate that the incoming `locale` parameter is valid
  let locale = props.params.lang;
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) {
    console.error("Unsupported locale", locale);
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <main lang={props.params.lang}>{props.children}</main>
    </NextIntlClientProvider>
  );
}

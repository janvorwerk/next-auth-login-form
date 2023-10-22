import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/app/_lib/locales";

// dynamic rendering required for getServerSession()
export const dynamic = "force-dynamic";
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
      <nav>
        <ul className="p-4 flex flex-row gap-4">
          {locales
            .filter((lang) => lang !== locale)
            .map((lang) => (
              <li key={lang}>
                {/*
                Don't use Next client side navigation here because we need to
                update the lang cookie!
                */}
                <a href={`/${lang}`} className="text-blue-800 underline">
                  {lang}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <main lang={props.params.lang}>{props.children}</main>
    </NextIntlClientProvider>
  );
}

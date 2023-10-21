import { SessionProvider } from "./_lib/providers";
import "./globals.css";

export default async function LocaleLayout(props: { children: React.ReactNode }) {
  return <SessionProvider>{props.children}</SessionProvider>;
}

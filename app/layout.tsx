import { Metadata } from "next";
import { SessionProvider } from "./_lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Auth & Intl',
  description: 'Mini proof of concept mixing Next-Auth + Next Intl with RSC',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return <SessionProvider>{props.children}</SessionProvider>;
}

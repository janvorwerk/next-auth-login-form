import { Metadata } from "next";
import { SessionProvider } from "./_lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth & Intl",
  description: "Mini proof of concept mixing Next-Auth + Next Intl + RSC & Next app-router",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SessionProvider>{props.children}</SessionProvider>
      </body>
    </html>
  );
}

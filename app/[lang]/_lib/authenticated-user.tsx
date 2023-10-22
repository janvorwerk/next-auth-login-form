"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AuthenticatedUser(props: { onLogout: () => Promise<void> }) {
  const tLogin = useTranslations("login");
  const t = useTranslations("messages");

  return (
    <>
      <div className="flex flex-row gap-4">
        <Link href="/a" className="bg-cyan-800 text-white p-2 rounded grow text-center">
          {t("gotoPage", { page: "A" })}
        </Link>
        <Link href="/b" className="bg-cyan-800 text-white p-2 rounded grow text-center">
        {t("gotoPage", { page: "B" })}
        </Link>
      </div>
      <button className="bg-red-800 text-white p-2 rounded" onClick={props.onLogout}>
        {tLogin("logout")}
      </button>
    </>
  );
}

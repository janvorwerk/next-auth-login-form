"use client";
import { useTranslations } from "next-intl";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const session = useSession();
  const t = useTranslations("messages");

  async function logout() {
    await signOut();
    console.log("Signed out");
  }
  return (
    <div className="flex flex-col p-4 gap-4">
      {session.status === "authenticated" ? (
        <>
          <div className="">
            {t("hello", { username: session?.data?.user?.name, status: session.status })}
          </div>
          <button className="bg-red-800 text-white p-2 rounded" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="">
            {t("helloNobody", {status: session.status})}
          </div>
          <Link href="/login" className="bg-cyan-800 text-white p-2 rounded">
            Go to the login page
          </Link>
        </>
      )}
    </div>
  );
}

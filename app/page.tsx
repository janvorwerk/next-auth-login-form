"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const session = useSession();

  async function logout() {
    await signOut();
    console.log("Signed out");
  }
  return (
    <div className="flex flex-col p-4 gap-4">
      {session.status === "authenticated" ? (
        <>
          <div className="">
            Hello <span className="text-cyan-900 font-bold">{session.data?.user?.name}</span>, your are{" "}
            <span className="text-cyan-900 font-bold">{session.status}</span>
          </div>
          <button className="bg-red-800 text-white p-2 rounded" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="">
            Hello, your are <span className="text-cyan-900 font-bold">{session.status}</span>
          </div>
          <Link href="/login" className="bg-cyan-800 text-white p-2 rounded">
            Go to the login page
          </Link>
        </>
      )}
    </div>
  );
}

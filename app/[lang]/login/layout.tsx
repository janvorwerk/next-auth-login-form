import { getSessionUser } from "@/app/_lib/auth-options";
import { redirect } from "next/navigation";

export default async function LocaleLayout(props: { children: React.ReactNode }) {
  const user = await getSessionUser();

  // don't ask for login if already authenticated
  if (user) {
    redirect("/");
  }
  return <>{props.children}</>
}

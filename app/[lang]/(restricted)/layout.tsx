import { redirect } from "next/navigation";
import { getSessionUser } from "@/app/_lib/auth-options";

export default async function RestrictedLayout(props: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) {
    return redirect("/login");
  }
  return <>{props.children}</>;
}

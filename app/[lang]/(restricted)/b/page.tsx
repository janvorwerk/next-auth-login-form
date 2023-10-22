import { getSessionUser } from "@/app/_lib/auth-options";
import RestrictedContent from "../../_lib/restricted";

export default async function Page() {
  const user = await getSessionUser();

  return <RestrictedContent page="Page B" user={user}></RestrictedContent>;
}

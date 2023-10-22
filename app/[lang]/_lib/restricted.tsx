import { useTranslations } from "next-intl";
import { AppUser } from "@/app/_lib/auth-options";

export default function RestrictedContent(props: { page: string, user?: AppUser }) {
  const t = useTranslations("messages");

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>{props.page}</div>
      <div>{t("hello", { username: props.user?.name })}</div>
      <div>{t("restrictedContent")}</div>
    </div>
  );
}

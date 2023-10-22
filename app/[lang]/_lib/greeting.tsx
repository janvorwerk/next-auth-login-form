import { useTranslations } from "next-intl";

export default function Greeting(props: { username?: string|null|undefined; status: string }) {
  const t = useTranslations("messages");
  const statusString = `'${props.status}'`

  if (props.status === "authenticated") {
    return <div className="">{t("helloWithStatus", { username: props.username, status: statusString })}</div>;
  } else {
    return <div className="">{t("helloNobody", { status: statusString })}</div>;
  }
}

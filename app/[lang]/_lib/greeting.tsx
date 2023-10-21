import { useTranslations } from "next-intl";

export default function Greeting(props: { username?: string|null|undefined; status: string }) {
  const t = useTranslations("messages");

  if (props.status === "authenticated") {
    return <div className="">{t("hello", { username: props.username, status: props.status })}</div>;
  } else {
    return <div className="">{t("helloNobody", { status: props.status })}</div>;
  }
}

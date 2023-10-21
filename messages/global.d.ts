// Use type safe message keys with `next-intl`
type Messages = typeof import("./en.json");
declare interface IntlMessages extends Messages {}

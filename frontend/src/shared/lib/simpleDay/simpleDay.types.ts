import { SimpleDay } from "./simpleDay";
import LOCALES from "./simpleDay.const";

export type TimeUnit =
  | "year"
  | "years"
  | "month"
  | "months"
  | "day"
  | "days"
  | "hour"
  | "hours"
  | "minute"
  | "minutes"
  | "second"
  | "seconds";

export type AnyDate = SimpleDay | Date | string | number;
export type LocaleKey = keyof typeof LOCALES;
export type Locales = (typeof LOCALES)[LocaleKey];

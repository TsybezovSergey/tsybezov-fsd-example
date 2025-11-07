import LOCALES from "./simpleDay.const";
import { LocaleKey } from "./simpleDay.types";

type TimeUnit =
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

type AnyDate = SimpleDay | Date | string | number;

export class SimpleDay {
  private _date: Date;

  constructor(date: AnyDate = new Date()) {
    if (date instanceof SimpleDay) {
      this._date = new Date(date._date);
    } else if (date instanceof Date) {
      this._date = new Date(date.getTime());
    } else {
      this._date = new Date(date);
    }
  }

  static now(): SimpleDay {
    return new SimpleDay();
  }

  static parse(dateString: string): SimpleDay {
    return new SimpleDay(new Date(dateString));
  }

  add(value: number, unit: TimeUnit): this {
    const d = new Date(this._date);
    switch (unit) {
      case "year":
      case "years":
        d.setFullYear(d.getFullYear() + value);
        break;
      case "month":
      case "months":
        d.setMonth(d.getMonth() + value);
        break;
      case "day":
      case "days":
        d.setDate(d.getDate() + value);
        break;
      case "hour":
      case "hours":
        d.setHours(d.getHours() + value);
        break;
      case "minute":
      case "minutes":
        d.setMinutes(d.getMinutes() + value);
        break;
      case "second":
      case "seconds":
        d.setSeconds(d.getSeconds() + value);
        break;
      default:
        throw new Error(`Unknown time unit: ${unit}`);
    }
    this._date = d;
    return this;
  }

  subtract(value: number, unit: TimeUnit): this {
    return this.add(-value, unit);
  }

  year(): number {
    return this._date.getFullYear();
  }

  month(): number {
    return this._date.getMonth() + 1;
  }

  date(): number {
    return this._date.getDate();
  }

  day(): number {
    return this._date.getDay();
  }

  hour(): number {
    return this._date.getHours();
  }

  minute(): number {
    return this._date.getMinutes();
  }

  second(): number {
    return this._date.getSeconds();
  }

  format(
    fmt: string = "YYYY-MM-DD HH:mm:ss",
    locale: LocaleKey = "en",
  ): string {
    const pad = (n: number, len = 2) => String(n).padStart(len, "0");

    const hours24 = this.hour();
    const hours12 = hours24 % 12 || 12;
    const minutes = this.minute();
    const seconds = this.second();
    const milliseconds = this._date.getMilliseconds();
    const dayOfWeek = this.day();
    const monthIndex = this.month() - 1;

    const monthsFull = LOCALES[locale].MONTHS_FULL;
    const monthsShort = LOCALES[locale].MONTHS_SHORT;
    const daysFull = LOCALES[locale].DAYS_FULL;
    const daysShort = LOCALES[locale].DAYS_SHORT;

    const tokens: Record<string, string> = {
      YYYY: String(this.year()),
      YY: String(this.year()).slice(-2),
      MM: pad(this.month()),
      M: String(this.month()),
      DD: pad(this.date()),
      D: String(this.date()),
      HH: pad(hours24),
      H: String(hours24),
      hh: pad(hours12),
      h: String(hours12),
      mm: pad(minutes),
      m: String(minutes),
      ss: pad(seconds),
      s: String(seconds),
      SSS: pad(milliseconds, 3),
      A: hours24 < 12 ? "AM" : "PM",
      a: hours24 < 12 ? "am" : "pm",
      d: String(dayOfWeek),
      ddd: daysShort[dayOfWeek],
      dddd: daysFull[dayOfWeek],
      MMM: monthsShort[monthIndex],
      MMMM: monthsFull[monthIndex],
    };

    // Создаём один RegExp из всех токенов, длинные токены впереди
    const tokenKeys = Object.keys(tokens).sort((a, b) => b.length - a.length);
    const regex = new RegExp(tokenKeys.join("|"), "g");

    // Один проход по строке, подставляем значения
    return fmt.replace(regex, (matched) => tokens[matched]);
  }

  isBefore(other: AnyDate): boolean {
    return this._date < new SimpleDay(other)._date;
  }

  isAfter(other: AnyDate): boolean {
    return this._date > new SimpleDay(other)._date;
  }

  isSame(
    other: AnyDate,
    unit: "millisecond" | "day" | "month" | "year" = "millisecond",
  ): boolean {
    const otherDay = new SimpleDay(other);

    switch (unit) {
      case "day":
        return this.format("YYYY-MM-DD") === otherDay.format("YYYY-MM-DD");
      case "month":
        return this.format("YYYY-MM") === otherDay.format("YYYY-MM");
      case "year":
        return this.year() === otherDay.year();
      default:
        return this._date.getTime() === otherDay._date.getTime();
    }
  }

  toDate(): Date {
    return new Date(this._date);
  }

  toString(): string {
    return this._date.toString();
  }

  valueOf(): number {
    return this._date.getTime();
  }
}

export function simpleDay(date?: AnyDate): SimpleDay {
  return new SimpleDay(date);
}

"use client";

import {
  Context,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { LocaleKey, Locales, LOCALES, simpleDay } from "@/src/shared/lib";

type VoidHandler = () => void;
export type FirstDayOfWeek = "Monday" | "Sunday";

type Win95CalendarContextT = Context<{
  date?: string;
  locale?: Locales;
  firstDayOfWeek?: FirstDayOfWeek;
  nextMonth: VoidHandler;
  prevMonth: VoidHandler;
}>;

const Win95CalendarContext: Win95CalendarContextT = createContext({
  nextMonth: () => {},
  prevMonth: () => {},
});

export function Win95CalendarProvider({
  children,
  constants: { FORMAT, LOCALE, FIRST_DAY_OF_WEEK },
}: {
  children: ReactNode;
  constants: {
    FORMAT: string;
    LOCALE: LocaleKey;
    FIRST_DAY_OF_WEEK: FirstDayOfWeek;
  };
}) {
  const [date, setDate] = useState<string>(simpleDay().format(FORMAT));

  const nextMonth = useCallback(() => {
    setDate(simpleDay(date).add(1, "month").format(FORMAT));
  }, [date]);

  const prevMonth = useCallback(() => {
    setDate(simpleDay(date).subtract(1, "month").format(FORMAT));
  }, [date]);

  return (
    <Win95CalendarContext.Provider
      value={{
        date,
        locale: LOCALES[LOCALE],
        firstDayOfWeek: FIRST_DAY_OF_WEEK,
        nextMonth,
        prevMonth,
      }}
    >
      {children}
    </Win95CalendarContext.Provider>
  );
}

export const useWin95CalendarProvider = () => useContext(Win95CalendarContext);

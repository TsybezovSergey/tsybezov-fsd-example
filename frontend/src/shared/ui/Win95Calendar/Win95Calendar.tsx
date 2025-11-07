"use client";

import { DATE_FORMAT } from "./src/shared";
import { Win95CalendarProvider } from "./src/shared/providers/Win95Calendar.context";
import { Win95Calendar as Win95CalendarComponent } from "./src/widget/Win95Calendar/Win95Calendar";

export const Win95Calendar = () => {
  return (
    <Win95CalendarProvider
      constants={{
        FORMAT: DATE_FORMAT,
        LOCALE: "ru",
        FIRST_DAY_OF_WEEK: "Monday",
      }}
    >
      <Win95CalendarComponent />
    </Win95CalendarProvider>
  );
};

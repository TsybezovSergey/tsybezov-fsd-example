import { SimpleDay } from "@/src/shared/lib/simpleDay/simpleDay";
import styles from "./Win95CalendarGrid.module.scss";
import { CalendarMonth } from "./Win95Calendar.store";
import { Locales } from "@/src/shared/lib";

type Win95CalendarGridProps = {
  date: SimpleDay;
  locale?: Locales;
  firstDayOfWeek?: "Monday" | "Sunday";
};

export function rotateWeekdays<T>(days: T[], startIndex: number): T[] {
  const normalizedIndex =
    ((startIndex % days.length) + days.length) % days.length;
  return [...days.slice(normalizedIndex), ...days.slice(0, normalizedIndex)];
}

export const Win95CalendarGrid = ({
  date,
  locale,
  firstDayOfWeek = "Monday",
}: Win95CalendarGridProps) => {
  const currentMonth = new CalendarMonth(date.year(), date.month());
  const daysShort = [...(locale?.DAYS_SHORT ?? [])];
  const weekdays = rotateWeekdays(
    daysShort,
    firstDayOfWeek === "Monday" ? 1 : 0,
  );

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {weekdays.map((d) => (
          <span className={styles.dayOfWeek}>{d}</span>
        ))}
      </div>
      <div className={styles.grid}>
        {currentMonth.getWeeks().map((week) => {
          return week.map((date) => {
            if (date === 0) {
              return <span className={styles.dayOfWeek} />;
            }
            return <span className={styles.dayOfWeek}>{date}</span>;
          });
        })}
      </div>
    </div>
  );
};

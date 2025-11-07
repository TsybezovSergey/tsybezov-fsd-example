import { simpleDay } from "@/src/shared/lib";
import { Win95CalendarGrid, Win95CalendarHeader } from "../../shared";
import { useWin95CalendarProvider } from "../../shared/providers/Win95Calendar.context";
import styles from "./Win95Calendar.module.scss";

export const Win95Calendar = () => {
  const context = useWin95CalendarProvider();
  return (
    <div className={styles.calendar}>
      <Win95CalendarHeader
        prevButton={{ onClick: context.prevMonth }}
        nextButton={{ onClick: context.nextMonth }}
        children={<div>{simpleDay(context.date).format("DD.MM YYYY")}</div>}
      />
      <Win95CalendarGrid
        firstDayOfWeek={context.firstDayOfWeek}
        locale={context.locale}
        date={simpleDay(context.date)}
      />
    </div>
  );
};

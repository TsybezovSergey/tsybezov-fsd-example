import { ReactNode } from "react";
import styles from "./Win95CalendarHeader.module.scss";

type Win95CalendarHeaderButtonProps = {
  onClick: () => void;
};

type Win95CalendarHeaderProps = {
  children: ReactNode;
  prevButton?: Win95CalendarHeaderButtonProps;
  nextButton?: Win95CalendarHeaderButtonProps;
};

export const Win95CalendarHeader = ({
  children,
  prevButton,
  nextButton,
}: Win95CalendarHeaderProps) => {
  return (
    <div className={styles.header}>
      <button onClick={prevButton?.onClick} className={styles.headerButton}>
        &lt;
      </button>
      {children}
      <button onClick={nextButton?.onClick} className={styles.headerButton}>
        &gt;
      </button>
    </div>
  );
};

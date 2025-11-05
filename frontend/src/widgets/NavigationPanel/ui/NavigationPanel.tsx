import { ReactNode } from "react";
import styles from "./NavigationPanel.module.scss";
import { ROUTES } from "../../../shared";
import Link from "next/link";

type NavigationPanelProps = {
  navigationRight: ReactNode;
};

export const NavigationPanel = ({ navigationRight }: NavigationPanelProps) => {
  return (
    <div className={styles.navigationPanel}>
      <div className={styles.rootSection}>
        <h2 className={styles.appTitle}>FSD App</h2>
        <nav className={styles.navigation}>
          <div className={styles.navigationLeft}>
            {Object.entries(ROUTES).map(([key, link]) => (
              <Link key={key} href={link.path} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.navigationRight}>{navigationRight}</div>
        </nav>
      </div>
    </div>
  );
};

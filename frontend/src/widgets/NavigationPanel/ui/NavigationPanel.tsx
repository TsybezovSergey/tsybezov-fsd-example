import { ReactNode } from "react";
import styles from "./NavigationPanel.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../shared";

type NavigationPanelProps = {
  navigationRight: ReactNode;
};

export const NavigationPanel = ({ navigationRight }: NavigationPanelProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigationPanel}>
      <div className={styles.rootSection}>
        <h2 className={styles.appTitle}>FSD App</h2>
        <nav className={styles.navigation}>
          <div className={styles.navigationLeft}>
            {Object.entries(ROUTES).map(([key, link]) => (
              <button
                key={key}
                onClick={() => navigate(link.path)}
                className={styles.navLink}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className={styles.navigationRight}>{navigationRight}</div>
        </nav>
      </div>
    </div>
  );
};

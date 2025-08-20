import React from "react";
import { NewsletterWidget } from "../../widgets/NewsletterWidget/ui/NewsletterWidget";
import styles from "./PageTemplate.module.scss";
import { Toasts } from "../../widgets/Toasts/Toasts";

interface PageTemplateProps {
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={styles["page-template"]}>
      <main
        className={`${styles["page-template__main"]} ${styles["page-template__main--with-navigation"]}`}
      >
        {children}
      </main>
      <Toasts />
      <NewsletterWidget />
    </div>
  );
};

import styles from "./Win95Card.module.scss";
import { type WithClassName } from "../../types/generics";

import classnames from "classnames/bind";
import { MouseEvent } from "react";

const cn = classnames.bind(styles);

interface Win95CardProps
  extends WithClassName<{
    title: string;
    description?: string;
    onClose?: () => void;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    classNames?: {
      description?: string;
      modal?: string;
    };
  }> {}

export const Win95Card: React.FC<Win95CardProps> = ({
  title,
  description,
  onClose,
  onClick,
  children,
  footer,
  className,
  classNames,
}) => {
  return (
    <div onClick={onClick} className={className ?? ""}>
      <div className={cn(styles.win95Modal, classNames?.modal)}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {onClose && (
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          )}
        </div>

        <div className={styles.content}>
          {description && (
            <p className={cn(styles.description, classNames?.description)}>
              {description}
            </p>
          )}

          {children}

          {footer && (
            <div className={styles.footer}>
              <small className={styles.disclaimer}>{footer}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

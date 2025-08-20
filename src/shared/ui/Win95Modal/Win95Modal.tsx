import styles from "./Win95Modal.module.scss";
import { type WithClassName } from "../../types/generics";

interface Win95ModalProps
  extends WithClassName<{
    title: string;
    description?: string;
    onClose?: () => void;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
  }> {}

export const Win95Modal: React.FC<Win95ModalProps> = ({
  title,
  description,
  onClose,
  children,
  footer,
  className,
}) => {
  return (
    <div className={className ?? ""}>
      <div className={styles.win95Modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {onClose && (
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          )}
        </div>

        <div className={styles.content}>
          {description && <p className={styles.description}>{description}</p>}

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

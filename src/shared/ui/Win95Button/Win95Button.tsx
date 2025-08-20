import React from "react";
import styles from "./Win95Button.module.scss";

interface Win95ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Win95Button: React.FC<Win95ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${styles.win95Button} ${className}`}
    >
      {children}
    </button>
  );
};

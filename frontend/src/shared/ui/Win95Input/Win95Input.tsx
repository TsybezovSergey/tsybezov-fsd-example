import React from "react";
import styles from "./Win95Input.module.scss";

import classnames from "classnames/bind";

const cn = classnames.bind(styles);

type Win95InputProps = {
  onChange?: (value: string) => void; // наш кастомный onChange
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>; // все базовые пропсы input

export const Win95Input: React.FC<Win95InputProps> = ({
  onChange,
  className = "",
  ...rest // все остальные стандартные пропсы
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value); // наш кастомный onChange
    }
  };

  return (
    <input
      {...rest} // прокидываем все стандартные пропсы
      onChange={handleChange}
      className={cn(styles.win95Input, className)}
    />
  );
};

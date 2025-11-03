import React from "react";
import styles from "./Win95Input.module.scss";

interface Win95InputProps {
  id?: string;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Win95Input: React.FC<Win95InputProps> = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyPress,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className={`${styles.win95Input} ${className}`}
    />
  );
};

import React, { ReactNode } from "react";
import classes from "./button.module.scss";

type ButtonProps = {
  variant?: string;
  className?: string;
  children?: ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
};

export default function Button({
  onClick,
  disabled,
  label,
  children,
}: ButtonProps) {
  return (
    <button className={classes.button} onClick={onClick} disabled={disabled}>
      {label || children}
    </button>
  );
}

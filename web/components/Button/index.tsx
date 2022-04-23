import React, { ReactNode } from "react";
import classes from "./button.module.scss";
import classNames from "classnames";

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
  variant,
  onClick,
  disabled,
  label,
  children,
}: ButtonProps) {
  return (
    <button
      className={classNames(classes.button, classes[`button--${variant}`])}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
}

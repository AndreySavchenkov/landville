"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonSizeEnum {
  MEDIUM,
  LARGE,
}

type ButtonProps = {
  className?: string;
  isFullWidth?: boolean;
  children: React.ReactNode;
  size?: ButtonSizeEnum;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  isFullWidth,
  className,
  size = ButtonSizeEnum.LARGE,
  ...props
}) => {
  const buttonStyle = classnames(styles.button, className, {
    [styles.button_medium]: size === ButtonSizeEnum.MEDIUM,
    [styles.button_fullWidth]: isFullWidth,
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;

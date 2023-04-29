import React, { FC } from "react";
import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  children,
  size = "m",
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === "s",
        [styles.middle]: size === "m",
        [styles.large]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

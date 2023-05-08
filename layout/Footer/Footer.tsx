import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format } from "date-fns";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

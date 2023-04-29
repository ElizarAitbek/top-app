import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Footer component</div>;
};
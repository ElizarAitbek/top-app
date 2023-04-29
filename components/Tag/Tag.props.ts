import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
  color?: "ghost" | "red" | "green" | "grey" | "primary";
  href?: string;
}

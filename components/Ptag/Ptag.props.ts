import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
}

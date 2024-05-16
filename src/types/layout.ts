import { ReactNode } from "react";

export interface CustomTextProps {
  children: ReactNode;
  title?: boolean;
  subTitle?: boolean;
  small?: boolean;
  bold?: boolean;
}

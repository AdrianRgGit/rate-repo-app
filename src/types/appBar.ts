import { ReactNode } from "react";

export interface AppBarProps {
  children: ReactNode;
  to: string;
  active?: boolean;
}

import type { ReactNode } from "react";

export type SectionLabelTag = "h2" | "p";

export interface SectionLabelProps {
  as?: SectionLabelTag;
  id?: string;
  children: ReactNode;
}

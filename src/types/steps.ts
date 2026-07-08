import type { ReactNode } from "react";

export interface StepData {
  id: number;
  stepLabel: string;
  title: string;
  category: string;
  icon: ReactNode | null;
}

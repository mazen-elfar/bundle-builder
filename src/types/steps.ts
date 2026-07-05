import React from "react";

export interface StepData {
  id: number;
  stepLabel: string;
  title: string;
  selectedText: string;
  icon: React.ReactNode | null;
  isOpen: boolean;
}
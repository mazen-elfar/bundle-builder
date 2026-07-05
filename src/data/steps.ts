import type { StepData } from "../types/steps";

export const steps: StepData[] = [
  {
    id: 1,
    stepLabel: "STEP 1 OF 4",
    title: "Choose your cameras",
    selectedText: "2 selected",
    isOpen: true,
    icon: null,
  },
  {
    id: 2,
    stepLabel: "STEP 2 OF 4",
    title: "Choose your plan",
    selectedText: "1 selected",
    isOpen: false,
    icon: null,
  },
  {
    id: 3,
    stepLabel: "STEP 3 OF 4",
    title: "Choose your sensors",
    selectedText: "2 selected",
    isOpen: false,
    icon: null,
  },
  {
    id: 4,
    stepLabel: "STEP 4 OF 4",
    title: "Add extra protection",
    selectedText: "1 selected",
    isOpen: false,
    icon: null,
  },
];

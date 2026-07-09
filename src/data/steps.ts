import type { StepData } from "../types/steps";
import CameraIcon from "../assets/icons-According/livestream.png";
import SensorIcon from "../assets/icons-According/Vector.png";
import AccessoryIcon from "../assets/icons-According/Group 1417.png";
import PlanIcon from "../assets/icons-According/Group 1418.png";

export const steps: StepData[] = [
  {
    id: 1,
    stepLabel: "STEP 1 OF 4",
    title: "Choose your cameras",
    category: "camera",
    icon: CameraIcon,
  },
  {
    id: 2,
    stepLabel: "STEP 2 OF 4",
    title: "Choose your sensors",
    category: "sensor",
    icon: SensorIcon,
  },
  {
    id: 3,
    stepLabel: "STEP 3 OF 4",
    title: "Add extra protection",
    category: "accessory",
    icon: AccessoryIcon,
  },
  {
    id: 4,
    stepLabel: "STEP 4 OF 4",
    title: "Choose your plan",
    category: "plan",
    icon: PlanIcon,
  },
];

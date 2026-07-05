import Accordion from "../accordion/Accordion";
import type { StepData } from "../../types/steps";

type StepProps = Omit<StepData, "id">;

const Step = ({
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
}: StepProps) => {
  return (
    <Accordion
      stepLabel={stepLabel}
      title={title}
      selectedText={selectedText}
      icon={icon}
      isOpen={isOpen}
    />
  );
};

export default Step;
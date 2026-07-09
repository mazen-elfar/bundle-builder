import Accordion from "../accordion/Accordion";

type StepProps = {
  stepId: number;
  stepLabel: string;
  title: string;
  selectedText: string;
  icon: string | null;
  isOpen: boolean;
  category: string;
  isLast: boolean;
};

const Step = ({
  stepId,
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
  category,
  isLast,
}: StepProps) => {
  return (
    <Accordion
      stepId={stepId}
      stepLabel={stepLabel}
      title={title}
      selectedText={selectedText}
      icon={icon}
      isOpen={isOpen}
      category={category}
      isLast={isLast}
    />
  );
};

export default Step;

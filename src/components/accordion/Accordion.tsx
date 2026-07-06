import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import type { StepData } from "../../types/steps";

type AccordionProps = Omit<StepData, "id">;

const Accordion = ({
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
}: AccordionProps) => {
  return (
    <section aria-label="Bundle step">
      <AccordionHeader
        stepLabel={stepLabel}
        title={title}
        selectedText={selectedText}
        icon={icon}
        isOpen={isOpen}
      />

      {isOpen && <AccordionContent />}
    </section>
  );
};

export default Accordion;
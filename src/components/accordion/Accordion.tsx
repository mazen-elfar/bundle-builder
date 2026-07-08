import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { useBundleContext } from "../../context/BundleContext";

type AccordionProps = {
  stepId: number;
  stepLabel: string;
  title: string;
  selectedText: string;
  icon: React.ReactNode | null;
  isOpen: boolean;
  category: string;
  isLast: boolean;
};

const Accordion = ({
  stepId,
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
  category,
  isLast,
}: AccordionProps) => {
  const { toggleStep } = useBundleContext();

  return (
    <section aria-label="Bundle step">
      <AccordionHeader
        stepLabel={stepLabel}
        title={title}
        selectedText={selectedText}
        icon={icon}
        isOpen={isOpen}
        onToggle={() => toggleStep(stepId)}
      />

      {isOpen && <AccordionContent category={category} isLast={isLast} />}
    </section>
  );
};

export default Accordion;

import Step from "./Step";
import { steps } from "../../data/steps";

const Builder = () => {
  return (
    <section aria-label="Bundle Builder" className="w-[768px] flex flex-col gap-[13px]">
      {steps.map((step) => (
        <Step
          key={step.id}
          stepLabel={step.stepLabel}
          title={step.title}
          selectedText={step.selectedText}
          icon={step.icon}
          isOpen={step.isOpen}
        />
      ))}
    </section>
  );
};

export default Builder;

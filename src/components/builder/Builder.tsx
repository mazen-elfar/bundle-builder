import Step from "./Step";
import { steps } from "../../data/steps";
import { useBundleContext } from "../../context/BundleContext";

const Builder = () => {
  const { state, getSelectedCount } = useBundleContext();

  return (
    <section aria-label="Bundle Builder" className="w-[768px] flex flex-col gap-[13px] max-sm:w-[390px] max-sm:gap-[20px]">
      {steps.map((step) => {
        const count = getSelectedCount(step.category);
        const selectedText =
          count === 0 ? "" : `${count} selected`;
        const isOpen = state.currentStep === step.id;

        return (
          <Step
            key={step.id}
            stepId={step.id}
            stepLabel={step.stepLabel}
            title={step.title}
            selectedText={selectedText}
            icon={step.icon}
            isOpen={isOpen}
            category={step.category}
            isLast={step.id === steps.length}
          />
        );
      })}
    </section>
  );
};

export default Builder;

import Button from "../ui/Button";
import { useBundleContext } from "../../context/BundleContext";
import { steps } from "../../data/steps";

type BuilderFooterProps = {
  isLast: boolean;
};

const BuilderFooter = ({ isLast }: BuilderFooterProps) => {
  const { nextStep, state } = useBundleContext();
  const currentStepIndex = steps.findIndex((s) => s.id === state.currentStep);
  const nextStepData = steps[currentStepIndex + 1];

  if (isLast) return null;

  const label = nextStepData
    ? `Next: ${nextStepData.title.replace("Choose your ", "").replace("Add ", "")}`
    : "Next";

  return (
    <footer
      className="
        mt-[8px]
        flex
        w-full
        justify-center

        max-sm:mt-[12px]
      "
    >
      <Button onClick={nextStep}>
        {label}
      </Button>
    </footer>
  );
};

export default BuilderFooter;

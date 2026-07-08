import SummaryPricing from "./SummaryPricing";
import SummaryCheckout from "./SummaryCheckout";
import SaveForLater from "./SaveForLater";
import { useBundleContext } from "../../context/BundleContext";

const ReviewSummary = () => {
  const { getSavings } = useBundleContext();
  const savings = getSavings();

  return (
    <section
      className="
        flex
        flex-col
        gap-[8px]
        w-full
      "
    >
      <SummaryPricing />

      {savings > 0 && (
        <p
          className="
            font-[Gilroy]
            font-[500]
            text-[12px]
            leading-[16px]
            tracking-[0.6px]
            text-[var(--color-success)]
            text-center
          "
        >
          Congrats! You&apos;re saving ${savings.toFixed(2)} on your security bundle!
        </p>
      )}

      <SummaryCheckout />

      <SaveForLater />
    </section>
  );
};

export default ReviewSummary;

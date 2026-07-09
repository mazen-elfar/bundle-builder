import guaranteeImage from "../../assets/images/991e1497c0a1c9e070778c8eb0abab6e98ddb05a.png";
import { useBundleContext } from "../../context/BundleContext";

const SummaryPricing = () => {
  const { getSubtotal, getCompareAtTotal, getMonthlyPayment } =
    useBundleContext();

  const subtotal = getSubtotal();
  const compareAtTotal = getCompareAtTotal();
  const monthly = getMonthlyPayment();

  return (
    <section
      className="
        flex
        items-center
        justify-between
        w-full
        h-[78px]

        max-sm:h-[60px]
      "
    >
      {/* Guarantee Image */}
      <img
        src={guaranteeImage}
        alt="100% Wyze Satisfaction Guarantee"
        draggable={false}
        className="
          w-[78px]
          h-[78px]
          object-contain
          select-none

          max-sm:w-[60px]
          max-sm:h-[60px]
        "
      />

      {/* Price Side */}
      <div
        className="
          flex
          flex-col
          items-end
          gap-[6px]
        "
      >
        {/* Monthly Badge */}
        <div
          className="
            inline-flex
            items-center
            justify-center
            rounded-[3px]
            bg-[var(--color-primary)]
            px-[8px]
            py-[5px]
          "
        >
          <span className="text-guarantee">
            as low as ${monthly.toFixed(2)}/mo
          </span>
        </div>

        {/* Prices */}
        <div
          className="
            flex
            items-end
            gap-[6px]
          "
        >
          {compareAtTotal > subtotal && (
            <span className="text-total-old">
              ${compareAtTotal.toFixed(2)}
            </span>
          )}

          <span className="text-total">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SummaryPricing;

type QuantityStepperProps = {
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
};

const QuantityStepper = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityStepperProps) => {
  return (
    <section
      className="
        flex
        items-center
        gap-[8px]
      "
    >
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
          border-2
          border-[var(--color-divider)]
          bg-[var(--color-surface)]
          text-[14px]
          text-[var(--color-text-light)]
          transition-colors
          hover:bg-[var(--color-page-bg)]
        "
      >
        −
      </button>

      <span
        className="
          text-[16px]
          font-medium
          leading-[20px]
          text-[#0B0D10]
        "
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
          bg-[#F0F4F7]
          text-[14px]
          text-[var(--color-text-secondary)]
          transition-colors
          hover:bg-[var(--color-divider)]
        "
      >
        +
      </button>
    </section>
  );
};

export default QuantityStepper;
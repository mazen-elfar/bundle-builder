import type { Variant } from "../../types/product";

type VariantOptionProps = {
  variant: Variant;
  selected: boolean;
};

const VariantOption = ({
  variant,
  selected,
}: VariantOptionProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`
        flex
        items-center
        justify-center
        w-[65px]
        h-[26px]
        gap-[4px]
        rounded-[2px]
        px-[3px]
        py-[1px]
        border-[0.5px]
        transition-colors
        overflow-hidden
        ${
          selected
            ? "border-[var(--color-success)] bg-[var(--color-success-soft)]"
            : "border-[var(--color-border)] bg-[var(--color-surface)]"
        }
      `}
    >
      <img
        src={variant.image}
        alt={variant.name}
        draggable={false}
        className="
          w-[28px]
          h-[28px]
          rounded-[5px]
          object-contain
          shrink-0
          select-none
        "
      />

      <span
        className="
          text-[10px]
          font-[Gilroy]
          font-[500]
          leading-[100%]
          tracking-[0.6px]
          whitespace-nowrap
          text-[var(--color-text-primary)]
        "
      >
        {variant.name}
      </span>
    </button>
  );
};

export default VariantOption;
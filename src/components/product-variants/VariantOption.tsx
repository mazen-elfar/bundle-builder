type VariantOptionProps = {
  imageUrl: string;
  name: string;
  selected: boolean;
  onSelect: () => void;
};

const VariantOption = ({
  imageUrl,
  name,
  selected,
  onSelect,
}: VariantOptionProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
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
        cursor-pointer
        ${
          selected
            ? "border-[var(--color-success)] bg-[var(--color-success-soft)]"
            : "border-[var(--color-border)] bg-[var(--color-surface)]"
        }
      `}
    >
      <img
        src={imageUrl}
        alt={name}
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
        {name}
      </span>
    </button>
  );
};

export default VariantOption;

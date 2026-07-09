import { useBundleContext } from "../../context/BundleContext";

type AddPlanButtonProps = {
  productId: string;
};

const AddPlanButton = ({ productId }: AddPlanButtonProps) => {
  const { getProductSelection, dispatch } = useBundleContext();
  const selection = getProductSelection(productId);
  const quantity = selection?.variantQuantities[productId] ?? 0;
  const isSelected = quantity > 0;

  const handleToggle = () => {
    dispatch({ type: "SELECT_PLAN", payload: { productId } });
  };

  return (
    <section className="flex flex-col items-start gap-[6px]">
      {isSelected && (
        <span
          className="
            text-[12px]
            font-medium
            leading-[16px]
            text-[var(--color-primary)]
          "
        >
          ✓ Added
        </span>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={isSelected}
        onClick={handleToggle}
        className={`
          relative
          h-[28px]
          w-[50px]
          rounded-full
          transition-colors
          duration-200
          ${
            isSelected
              ? "bg-[var(--color-primary)]"
              : "bg-[var(--color-divider)]"
          }
        `}
      >
        <span
          className={`
            absolute
            top-[3px]
            left-[3px]
            h-[22px]
            w-[22px]
            rounded-full
            bg-white
            shadow-sm
            transition-transform
            duration-200
            ${isSelected ? "translate-x-[22px]" : "translate-x-0"}
          `}
        />
      </button>
    </section>
  );
};

export default AddPlanButton;

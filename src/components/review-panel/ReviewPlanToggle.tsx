import { useBundleContext } from "../../context/BundleContext";

type ReviewPlanToggleProps = {
  productId: string;
};

const ReviewPlanToggle = ({ productId }: ReviewPlanToggleProps) => {
  const { getProductSelection, dispatch } = useBundleContext();
  const selection = getProductSelection(productId);
  const quantity = selection?.variantQuantities[productId] ?? 0;
  const isSelected = quantity > 0;

  const handleToggle = () => {
    dispatch({ type: "SELECT_PLAN", payload: { productId } });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isSelected}
      onClick={handleToggle}
      className={`
        relative
        h-[28px]
        w-[50px]
        shrink-0
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
  );
};

export default ReviewPlanToggle;

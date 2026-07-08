import { useBundleContext } from "../../context/BundleContext";

type ReviewQuantityStepperProps = {
  productId: string;
  variantId: string;
  quantity: number;
};

const ReviewQuantityStepper = ({
  productId,
  variantId,
  quantity,
}: ReviewQuantityStepperProps) => {
  const { dispatch } = useBundleContext();

  const handleDecrease = () => {
    dispatch({
      type: "DECREMENT_VARIANT",
      payload: { productId, variantId },
    });
  };

  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT_VARIANT",
      payload: { productId, variantId },
    });
  };

  return (
    <div
      className="
        flex
        items-center
        gap-[10px]
      "
    >
      {/* Minus */}
      <button
        type="button"
        onClick={handleDecrease}
        aria-label="Decrease quantity"
        className="
          flex
          h-[20px]
          w-[20px]
          shrink-0
          items-center
          justify-center
          rounded-[4px]
          border
          border-[#CED6DE]
          bg-white
          transition-colors
          hover:bg-[#F7F8FA]
          cursor-pointer
        "
      >
        <span
          className="
            block
            h-[1.6px]
            w-[8px]
            rounded-full
            bg-[#575757]
          "
        />
      </button>

      {/* Quantity */}
      <span
        className="
          w-[8px]
          text-center
          font-[Gilroy]
          font-[600]
          text-[14px]
          leading-[16px]
          text-[#0B0D10]
        "
      >
        {quantity}
      </span>

      {/* Plus */}
      <button
        type="button"
        onClick={handleIncrease}
        aria-label="Increase quantity"
        className="
          flex
          h-[20px]
          w-[20px]
          shrink-0
          items-center
          justify-center
          rounded-[4px]
          border
          border-[#CED6DE]
          bg-white
          transition-colors
          hover:bg-[#F7F8FA]
          cursor-pointer
        "
      >
        <div
          className="
            relative
            h-[8px]
            w-[8px]
          "
        >
          <span
            className="
              absolute
              left-0
              top-1/2
              h-[1.6px]
              w-[8px]
              -translate-y-1/2
              rounded-full
              bg-[#575757]
            "
          />

          <span
            className="
              absolute
              left-1/2
              top-0
              h-[8px]
              w-[1.6px]
              -translate-x-1/2
              rounded-full
              bg-[#575757]
            "
          />
        </div>
      </button>
    </div>
  );
};

export default ReviewQuantityStepper;

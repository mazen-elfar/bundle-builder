import ReviewCategory from "./ReviewCategory";
import ReviewSummary from "../review-summary/ReviewSummary";
import ReviewItem from "./ReviewItem";
import FastShippingRow from "./FastShippingRow";
import { useBundleContext } from "../../context/BundleContext";

const ReviewContent = () => {
  const { getReviewItems, state } = useBundleContext();
  const reviewGroups = getReviewItems();

  const hasAnyItems = Object.values(state.selections).some((sel) =>
    Object.values(sel.variantQuantities).some((q) => q > 0)
  );

  return (
    <section
      className="
        flex
        w-[390px]
        flex-1
        flex-col
        gap-[10px]
        bg-[var(--color-builder-bg)]
        px-[20px]
        pt-[20px]
        pb-[31px]

        max-sm:w-[390px]
        max-sm:bg-transparent
        max-sm:px-[20px]
        max-sm:pt-[15px]
        max-sm:pb-[20px]
      "
    >
      {/* Intro */}
      <section
        className="
          flex
          flex-col
          gap-[5px]
        "
      >
        <h2
          className="
            font-[Gilroy]
            font-[600]
            text-[22px]
            leading-[100%]
            tracking-[0.6px]
            text-[var(--color-text-primary)]

            max-sm:text-[18px]
          "
        >
          Your security system
        </h2>

        <p
          className="
            font-[Gilroy]
            font-[500]
            text-[14px]
            leading-[130%]
            tracking-[0.6px]
            text-[var(--color-text-muted)]

            max-sm:text-[12px]
          "
        >
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </section>

      {/* Categories */}
      {reviewGroups.map((group) => (
        <ReviewCategory key={group.category} title={group.label}>
          {group.items.map((item) => (
            <ReviewItem
              key={`${item.product.id}-${item.variantId}`}
              productId={item.product.id}
              variantId={item.variantId}
              image={item.variantImage}
              title={`${item.product.name}${item.product.variants.length > 0 ? ` - ${item.variantName}` : ""}`}
              quantity={item.quantity}
              price={item.product.price}
              compareAtPrice={item.product.compareAtPrice}
            />
          ))}
        </ReviewCategory>
      ))}

      {/* Fast Shipping — static row, visible when any item is selected */}
      {hasAnyItems && (
        <ReviewCategory title="">
          <FastShippingRow />
        </ReviewCategory>
      )}

      {/* Summary */}
      <ReviewSummary />
    </section>
  );
};

export default ReviewContent;

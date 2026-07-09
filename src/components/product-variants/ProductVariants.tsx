import type { Variant } from "../../types/product";

import VariantOption from "./VariantOption";
import { useBundleContext } from "../../context/BundleContext";

type ProductVariantsProps = {
  productId: string;
  variants: Variant[];
  selectedVariant?: string | null;
};

const ProductVariants = ({
  productId,
  variants,
  selectedVariant,
}: ProductVariantsProps) => {
  const { dispatch } = useBundleContext();

  if (!variants.length) return null;

  const handleSelect = (variantId: string) => {
    dispatch({
      type: "SELECT_VARIANT",
      payload: { productId, variantId },
    });
  };

  return (
    <section
      className="
        flex
        items-center
        gap-[6px]
        w-[205px]
        h-[26px]

        max-sm:w-auto
        max-sm:h-[22px]
        max-sm:gap-[4px]
      "
    >
      {variants.map((variant) => (
        <VariantOption
          key={variant.id}
          imageUrl={variant.image}
          name={variant.name}
          selected={variant.id === selectedVariant}
          onSelect={() => handleSelect(variant.id)}
        />
      ))}
    </section>
  );
};

export default ProductVariants;

import type { Variant } from "../../types/product";

import VariantOption from "./VariantOption";

type ProductVariantsProps = {
  variants: Variant[];
  selectedVariant?: string | null;
};

const ProductVariants = ({
  variants,
  selectedVariant,
}: ProductVariantsProps) => {
  if (!variants.length) return null;

  return (
    <section
      className="
        flex
        items-center
        gap-[6px]
        w-[205px]
        h-[26px]
      "
    >
      {variants.map((variant) => (
        <VariantOption
          key={variant.id}
          variant={variant}
          selected={variant.id === selectedVariant}
        />
      ))}
    </section>
  );
};

export default ProductVariants;
import type { Product } from "../../types/product";

import Badge from "../ui/Badge";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductVariants from "../product-variants/ProductVariants";
import QuantityStepper from "../quantity-stepper/QuantityStepper";
import { useBundleContext } from "../../context/BundleContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { getProductSelection, isProductSelected, dispatch } =
    useBundleContext();

  const selection = getProductSelection(product.id);
  const selected = isProductSelected(product.id);

  const hasVariants = product.variants.length > 0;
  const currentVariantId = selection?.selectedVariantId;
  const currentVariant = hasVariants
    ? product.variants.find((v) => v.id === currentVariantId)
    : undefined;
  const displayImage = currentVariant?.image ?? product.image;
  const currentQuantity = currentVariantId
    ? (selection?.variantQuantities[currentVariantId] ?? 0)
    : 0;

  const handleIncrease = () => {
    if (!currentVariantId) return;
    dispatch({
      type: "INCREMENT_VARIANT",
      payload: { productId: product.id, variantId: currentVariantId },
    });
  };

  const handleDecrease = () => {
    if (!currentVariantId) return;
    dispatch({
      type: "DECREMENT_VARIANT",
      payload: { productId: product.id, variantId: currentVariantId },
    });
  };

  return (
    <article
      className={`
        flex
        w-[361.5px]
        gap-[19px]
        rounded-[10px]
        border-2
        p-[11px]
        bg-[var(--color-surface)]

        max-sm:w-[350px]
        max-sm:gap-[12px]
        max-sm:p-[8px]
        ${
          selected
            ? "border-[var(--color-primary)]"
            : "border-[var(--color-divider)]"
        }
      `}
    >
      {/* Left Section */}
      <div
        className="
          relative
          flex
          h-[137px]
          w-[101px]
          shrink-0
          items-center
          justify-center

          max-sm:h-[90px]
          max-sm:w-[70px]
        "
      >
        {product.badge && (
          <div className="absolute left-0 top-0 z-10">
            <Badge text={product.badge} />
          </div>
        )}

        <img
          src={displayImage}
          alt={product.name}
          draggable={false}
          className="
            max-h-full
            max-w-full
            object-contain
            select-none
          "
        />
      </div>

      {/* Right Section */}
      <div
        className="
          flex
          w-[219.5px]
          flex-col
          justify-between

          max-sm:w-auto
          max-sm:flex-1
        "
      >
        {/* Top Content */}
        <div
          className="
            flex
            flex-col
            gap-[10px]
          "
        >
          <ProductInfo
            name={product.name}
            description={product.description}
            learnMore={product.learnMore}
          />

          {hasVariants && (
            <ProductVariants
              productId={product.id}
              variants={product.variants}
              selectedVariant={currentVariantId}
            />
          )}
        </div>

        {/* Footer */}
        <div
          className="
            flex
            items-end
            justify-between
          "
        >
          <QuantityStepper
            quantity={currentQuantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <ProductPrice
            price={product.price}
            compareAtPrice={product.compareAtPrice}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

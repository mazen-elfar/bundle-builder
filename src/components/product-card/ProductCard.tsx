import type { Product } from "../../types/product";

import Badge from "../ui/Badge";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductVariants from "../product-variants/ProductVariants";
import QuantityStepper from "../quantity-stepper/QuantityStepper";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
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
        ${
          product.isSelected
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
        "
      >
        {product.badge && (
          <div className="absolute left-0 top-0 z-10">
            <Badge text={product.badge} />
          </div>
        )}

        <img
          src={product.image}
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

          <ProductVariants
            variants={product.variants}
            selectedVariant={product.selectedVariant}
          />
        </div>

        {/* Footer */}
        <div
          className="
            flex
            items-end
            justify-between
          "
        >
          <QuantityStepper quantity={product.quantity} />

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
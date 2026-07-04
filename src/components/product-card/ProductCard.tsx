import Badge from "../ui/Badge";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import VariantSelector from "../variant-selector/VariantSelector";
import QuantityStepper from "../quantity-stepper/QuantityStepper";

const ProductCard = () => {
  return (
    <article>
      <Badge />

      {/* Product Image */}
      <figure>
        {/* Product Image */}
      </figure>

      <ProductInfo />

      <VariantSelector />

      <QuantityStepper />

      <ProductPrice />
    </article>
  );
};

export default ProductCard;
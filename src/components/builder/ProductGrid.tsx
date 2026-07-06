import ProductCard from "../product-card/ProductCard";
import { products } from "../../data/products";

const ProductGrid = () => {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        gap-[15px]
      "
    >
      {/* Four Cards Container */}
      <div
        className="
          w-full
          flex
          flex-col
          gap-[15px]
        "
      >
        {/* Top Row */}
        <div
          className="
            flex
            gap-[15px]
          "
        >
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} />
        </div>

        {/* Bottom Row */}
        <div
          className="
            flex
            gap-[15px]
          "
        >
          <ProductCard product={products[2]} />
          <ProductCard product={products[3]} />
        </div>
      </div>

      {/* Last Card */}
     {/* Last Card */}
<div
  className="
    flex
    justify-center
    w-full
  "
>
  <ProductCard product={products[4]} />
</div>
    </section>
  );
};

export default ProductGrid;
import ProductCard from "../product-card/ProductCard";
import { useBundleContext } from "../../context/BundleContext";

type ProductGridProps = {
  category: string;
};

const ProductGrid = ({ category }: ProductGridProps) => {
  const { getProductsByCategory } = useBundleContext();
  const categoryProducts = getProductsByCategory(category);

  return (
    <section
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
        {categoryProducts.slice(0, 2).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Middle Row (if 3+ products) */}
      {categoryProducts.length > 2 && (
        <div
          className="
            flex
            gap-[15px]
          "
        >
          {categoryProducts.slice(2, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Last Row (if 5+ products, centered) */}
      {categoryProducts.length > 4 && (
        <div
          className="
            flex
            justify-center
            w-full
          "
        >
          {categoryProducts.slice(4, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;

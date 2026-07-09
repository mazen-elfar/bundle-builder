type ProductPriceProps = {
  price: number;
  compareAtPrice?: number | null;
};

const ProductPrice = ({
  price,
  compareAtPrice,
}: ProductPriceProps) => {
  return (
    <section
      className="
        flex
        flex-col
        items-end
        justify-center
        leading-none
      "
    >
      {compareAtPrice && (
        <span
          className="
            text-[16px]
            font-normal
            tracking-[0.6px]
            text-[var(--color-price-old)]
            line-through

            max-sm:text-[12px]
          "
        >
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span
        className="
          text-[16px]
          font-[Gilroy]
          font-[500]
          tracking-[0.6px]
          text-[var(--color-text-muted)]

          max-sm:text-[12px]
        "
      >
        ${price.toFixed(2)}
      </span>
    </section>
  );
};

export default ProductPrice;
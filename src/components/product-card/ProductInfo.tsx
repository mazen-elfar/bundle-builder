type ProductInfoProps = {
  name: string;
  description: string;
  learnMore: string;
};

const ProductInfo = ({
  name,
  description,
  learnMore,
}: ProductInfoProps) => {
  return (
    <section
      className="
        flex
        flex-col
        gap-[8px]
      "
    >
      {/* Product Title */}
     <h3
  className="
    font-[Gilroy]
    font-[600]
    text-[16px]
    leading-[100%]
    tracking-[0.6px]
    text-[var(--color-text-primary)]

    max-sm:text-[13px]
  "
    > 
        {name}
      </h3>

      {/* Product Description */}
      <p
  className="
    font-[Gilroy]
    font-[500]
    text-[12px]
    leading-[130%]
    tracking-[0.6px]
    text-[var(--color-text-muted)]

    max-sm:text-[10px]
  "
    >
        {description}{" "}
        <a
          href={learnMore}
          aria-label={`Learn more about ${name}`}
          className="
            text-[var(--color-primary)]
            underline
            decoration-solid
            underline-offset-[2px]
            transition-colors
            duration-150
            hover:text-[var(--color-primary-hover)]
            font-[Gilroy]
            font-[500]
          "
        >
          Learn More
        </a>
      </p>
    </section>
  );
};

export default ProductInfo;
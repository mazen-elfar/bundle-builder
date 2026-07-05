interface ProductInfoProps {
  name: string;
  description: string;
}

const ProductInfo = ({ name, description }: ProductInfoProps) => {
  return (
    <section className="flex flex-col gap-[4px]">
      <h3
        style={{
          fontSize: "var(--fs-body)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--color-text-primary)",
          lineHeight: "1.3",
        }}
      >
        {name}
      </h3>

      <p
        style={{
          fontSize: "var(--fs-step-label)",
          fontWeight: "var(--fw-regular)",
          color: "var(--color-text-secondary)",
          lineHeight: "1.4",
        }}
      >
        {description}{" "}
        <a
          href="#"
          style={{
            fontSize: "var(--fs-step-label)",
            fontWeight: "var(--fw-regular)",
            color: "var(--color-primary)",
            textDecoration: "underline",
          }}
        >
          Learn More
        </a>
      </p>
    </section>
  );
};

export default ProductInfo;
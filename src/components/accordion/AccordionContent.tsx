import ProductGrid from "../builder/ProductGrid";
import BuilderFooter from "../builder/BuilderFooter";

const AccordionContent = () => {
  return (
    <section
      className="
        flex
        w-full
        flex-col
        gap-[15px]
        bg-[#EEF4FF]
        px-[15px]
        pt-[20px]
        pb-[20px]
      "
    >
      <ProductGrid />

      <BuilderFooter />
    </section>
  );
};

export default AccordionContent;
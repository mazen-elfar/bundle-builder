import ProductGrid from "../builder/ProductGrid";
import BuilderFooter from "../builder/BuilderFooter";

type AccordionContentProps = {
  category: string;
  isLast: boolean;
};

const AccordionContent = ({ category, isLast }: AccordionContentProps) => {
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
      <ProductGrid category={category} />

      <BuilderFooter isLast={isLast} category={category} />
    </section>
  );
};

export default AccordionContent;

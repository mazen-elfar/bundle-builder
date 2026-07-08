import type { ReactNode } from "react";

type ReviewCategoryProps = {
  title: string;
  children: ReactNode;
};

const ReviewCategory = ({
  title,
  children,
}: ReviewCategoryProps) => {
  return (
    <section
      className="
        flex
        flex-col
        w-full
        gap-[8px]
        pt-[15px]
        border-t
        border-[#CED6DE]
      "
    >
      <span
        className="
          text-review-category
        "
      >
        {title}
      </span>

      <div
        className="
          flex
          flex-col
          gap-[12px]
        "
      >
        {children}
      </div>
    </section>
  );
};

export default ReviewCategory;
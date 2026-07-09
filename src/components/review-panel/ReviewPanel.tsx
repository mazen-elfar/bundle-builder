import ReviewHeader from "./ReviewHeader";
import ReviewContent from "./ReviewContent";

const ReviewPanel = () => {
  return (
    <aside
      className="
        flex
        h-[855px]
        w-[399px]
        flex-col
        gap-[5px]
        rounded-[10px]

        max-sm:w-[390px]
        max-sm:h-auto
        max-sm:rounded-none
        max-sm:bg-[#EDF4FF]
        max-sm:pt-[15px]
      "
    >
      <ReviewHeader />

      <ReviewContent />
    </aside>
  );
};

export default ReviewPanel;
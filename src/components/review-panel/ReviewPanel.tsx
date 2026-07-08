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
      "
    >
      <ReviewHeader />

      <ReviewContent />
    </aside>
  );
};

export default ReviewPanel;
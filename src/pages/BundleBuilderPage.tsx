import MainLayout from "../layouts/MainLayout";
import Builder from "../components/builder/Builder";
import ReviewPanel from "../components/review-panel/ReviewPanel";

const BundleBuilderPage = () => {
  return (
    <MainLayout>
      <div
        className="
          flex
          items-start
          gap-[29px]

          max-sm:w-[390px]
          max-sm:flex-col
          max-sm:items-center
          max-sm:gap-[20px]
        "
      >
        {/* Mobile Title */}
        <h1
          className="
            hidden

            max-sm:flex
            max-sm:w-[348px]
            max-sm:items-center
            max-sm:justify-center
            max-sm:font-[Gilroy]
            max-sm:font-bold
            max-sm:text-[31.88px]
            max-sm:leading-[110%]
            max-sm:tracking-[-0.06px]
            max-sm:text-[#1F1F1F]
          "
        >
          Let&apos;s get started!
        </h1>

        <Builder />

        <ReviewPanel />
      </div>
    </MainLayout>
  );
};

export default BundleBuilderPage;
import MainLayout from '../layouts/MainLayout';
import Builder from '../components/builder/Builder';
import ReviewPanel from '../components/review-panel/ReviewPanel';

const BundleBuilderPage = () => {
  return (
    <MainLayout>
      <div className="flex items-start gap-[29px]">
        <Builder />
        <ReviewPanel />
      </div>
    </MainLayout>   
  );
};

export default BundleBuilderPage;

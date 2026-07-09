import { useBundleContext } from "../../context/BundleContext";

const SaveForLater = () => {
  const { saveSystem } = useBundleContext();

  return (
    <button
      type="button"
      onClick={saveSystem}
      className="
        flex
        w-full
        items-center
        justify-center
        bg-transparent
        transition-opacity
        duration-200
        hover:opacity-70
        cursor-pointer

        max-sm:w-[350px]
      "
    >
      <span className="text-save-for-later">
        Save my system for later
      </span>
    </button>
  );
};

export default SaveForLater;

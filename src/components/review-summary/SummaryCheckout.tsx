type CheckoutButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

const CheckoutButton = ({
  onClick,
  disabled = false,
}: CheckoutButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        flex
        h-[48px]
        w-full
        items-center
        justify-center
        gap-[8px]
        rounded-[4px]
        bg-[#4E2FD2]
        px-[16px]
        py-[13px]
        transition-colors
        duration-200
        hover:bg-[#4328B5]
        disabled:cursor-not-allowed
        disabled:opacity-50
        cursor-pointer
      "
    >
      <span
        className="
          font-[TT_Norms_Pro]
          text-[17px]
          font-bold
          leading-[100%]
          text-center
          text-white
        "
      >
        Checkout
      </span>
    </button>
  );
};

export default CheckoutButton;

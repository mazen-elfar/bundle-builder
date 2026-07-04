type QuantityStepperProps = {
  quantity: number;
};

const QuantityStepper = ({ quantity }: QuantityStepperProps) => {
  return (
    <div className="inline-flex items-center gap-0 rounded-lg border border-[#CBD5E1] overflow-hidden">
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:bg-[#F1F5F9] text-lg leading-none"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#1E293B] border-x border-[#CBD5E1]">
        {quantity}
      </span>
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:bg-[#F1F5F9] text-lg leading-none"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;

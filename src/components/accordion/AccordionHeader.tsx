import type { StepData } from "../../types/steps";

type AccordionHeaderProps = Omit<StepData, "id">;

const ChevronUp = () => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6L5 2L9 6"
      stroke="#4E2FD2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="#4E2FD2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AccordionHeader = ({
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
}: AccordionHeaderProps) => {
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <header className="w-full flex flex-col gap-[5px]">
      {/* Step Label */}
      <span className="px-[15px] text-[10px] tracking-[1.6px] uppercase text-[#484848] font-normal">
        {stepLabel}
      </span>

      {/* Header Content */}
      <div className="flex items-center justify-between h-[67px] px-[15px] py-[20px] gap-[3px] border-y-[0.5px] border-[#1F1F1F]">
        {/* Left Section */}
        <div className="flex items-center gap-[8px] flex-1 min-w-0">
          {/* Icon */}
          <div className="w-[26px] h-[27px] flex items-center justify-center">
            {icon}
          </div>

          <h2 className="text-[22px] leading-[100%] tracking-normal text-[#0B0D10] font-normal">
            {title}
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[4px] shrink-0">
          <span className="text-[14px] leading-[16px] text-[#4E2FD2] text-center font-normal">
            {selectedText}
          </span>

          {/* Chevron */}
          <div className="w-[10px] h-[7px] flex items-center justify-center">
            <Chevron />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccordionHeader;
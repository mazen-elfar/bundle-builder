type AccordionHeaderProps = {
  stepLabel: string;
  title: string;
  selectedText: string;
  icon: React.ReactNode | null;
  isOpen: boolean;
  onToggle: () => void;
};

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
  onToggle,
}: AccordionHeaderProps) => {
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <header className="w-full flex flex-col gap-[5px]">
      {/* Step Label */}
      <span className="px-[15px] text-[10px] tracking-[1.6px] uppercase text-[#484848] font-normal">
        {stepLabel}
      </span>

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className={`
          flex
          h-[67px]
          w-full
          items-center
          justify-between
          gap-[3px]
          px-[15px]
          py-[20px]
          border-[#1F1F1F]
          cursor-pointer

          max-sm:h-[60px]
          max-sm:py-[12px]
          ${isOpen
            ? "border-t-[0.5px] bg-[var(--color-builder-bg)]"
            : "border-y-[0.5px] bg-[var(--color-surface)]"
          }
        `}
      >
        {/* Left */}
        <div className="flex flex-1 items-center gap-[8px] min-w-0">
          <div className="flex h-[27px] w-[26px] items-center justify-center">
            {icon}
          </div>

          <h2
            className="
              font-[Gilroy]
              font-[600]
              text-[22px]
              leading-[100%]
              text-[#0B0D10]

              max-sm:text-[18px]
            "
          >
            {title}
          </h2>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-[4px]">
          <span className="text-[14px] font-normal leading-[16px] text-[#4E2FD2] max-sm:text-[12px]">
            {selectedText}
          </span>

          <div className="flex h-[7px] w-[10px] items-center justify-center">
            <Chevron />
          </div>
        </div>
      </button>
    </header>
  );
};

export default AccordionHeader;

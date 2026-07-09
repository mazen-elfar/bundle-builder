type AccordionHeaderProps = {
  stepLabel: string;
  title: string;
  selectedText: string;
  icon: string | null;
  isOpen: boolean;
  onToggle: () => void;
};

import ChevronImg from "../../assets/icons-According/carrot-up.png";

const Chevron = ({ isOpen }: { isOpen: boolean }) => (
  <img
    src={ChevronImg}
    alt=""
    draggable={false}
    className={`
      h-[7px] w-[10px] select-none
      transition-transform duration-200
      ${isOpen ? "rotate-0" : "rotate-180"}
    `}
  />
);

const AccordionHeader = ({
  stepLabel,
  title,
  selectedText,
  icon,
  isOpen,
  onToggle,
}: AccordionHeaderProps) => {
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
            {icon && (
              <img
                src={icon}
                alt=""
                draggable={false}
                className="max-h-full max-w-full select-none"
              />
            )}
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
          {selectedText && (
            <span className="text-[14px] font-normal leading-[16px] text-[#4E2FD2] max-sm:text-[12px]">
              {selectedText}
            </span>
          )}

          <div className="flex h-[7px] w-[10px] items-center justify-center">
            <Chevron isOpen={isOpen} />
          </div>
        </div>
      </button>
    </header>
  );
};

export default AccordionHeader;

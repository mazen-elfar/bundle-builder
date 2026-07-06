type BadgeProps = {
  text?: string | null;
};

const Badge = ({ text }: BadgeProps) => {
  if (!text) return null;

  return (
    <span
      className="
        inline-flex
        h-[19px]
        shrink-0
        select-none
        whitespace-nowrap
        items-center
        justify-center
        rounded-[10px]
        bg-[#4E2FD2]
        px-[6px]
        py-[2px]
        text-[12px]
        leading-none
        text-white
        font-[Gilroy]
        font-[500]
      "
    >
      {text}
    </span>
  );
};

export default Badge;
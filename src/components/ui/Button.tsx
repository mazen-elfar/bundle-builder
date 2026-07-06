type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const Button = ({
  children,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
  type={type}
  onClick={onClick}
  className="
    group
    flex
    h-[39px]
    w-[242px]
    items-center
    justify-center
    gap-[10px]
    rounded-[7px]
    border
    border-[var(--color-primary)]
    bg-[var(--color-surface)]
    px-[24px]
    py-[5px]
    transition-colors
    duration-150
    hover:bg-[var(--color-primary)]
    hover:text-white
    font-[Gilroy]
    font-[600]
    text-[var(--color-primary)]
  "
>
      {children}
    </button>
  );
};

export default Button;
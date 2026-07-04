type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
};

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 text-[15px]',
    secondary:
      'border border-[#4F46E5] text-[#4F46E5] hover:bg-[#EEF2FF] px-6 py-3 text-[15px]',
    ghost:
      'text-[#4F46E5] underline text-[13px] font-normal bg-transparent',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

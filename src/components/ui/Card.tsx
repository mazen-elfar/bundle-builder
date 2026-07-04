type CardProps = {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
};

const Card = ({ children, selected = false, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl border p-4 ${
        selected ? 'border-[#a6a5b6] border-2' : 'border-[#E2E8F0]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

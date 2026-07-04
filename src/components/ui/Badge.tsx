type BadgeProps = {
  label: string;
  color?: 'purple' | 'blue';
};

const Badge = ({ label, color = 'purple' }: BadgeProps) => {
  const colors = {
    purple: 'bg-[#6B4EFF] text-white',
    blue: 'bg-[#3B82F6] text-white',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold leading-none ${colors[color]}`}
    >
      {label}
    </span>
  );
};

export default Badge;

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <p>
      {children}
    </p>
  );
};

export default SectionTitle;

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main
      className="
        flex
        min-h-screen
        justify-center
        bg-[var(--color-page-bg)]
      "
    >
      <div
        className="
          box-border
          flex
          h-[1077px]
          w-[1440px]
          px-[122px]
          pt-[49px]
        "
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
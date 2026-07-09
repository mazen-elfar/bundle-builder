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

          max-sm:w-[390px]
          max-sm:h-auto
          max-sm:px-0
          max-sm:pt-[31px]
          max-sm:flex-col
          max-sm:items-center
        "
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
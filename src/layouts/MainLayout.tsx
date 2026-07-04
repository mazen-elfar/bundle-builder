
type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      <div className="mx-auto max-w-[1196px] px-4 lg:px-0 py-[50px]">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
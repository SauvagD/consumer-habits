import SideBar from "./side-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-lvh w-lvw">
      <section className="w-1/8 bg-gradient-to-r from-gray-200 to-white h-lvh flex items-center justify-center">
        <SideBar />
      </section>
      <main className="flex-1 flex justify-center">
        <div className="max-w-5xl w-full py-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

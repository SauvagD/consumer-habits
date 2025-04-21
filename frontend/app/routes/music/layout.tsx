import { Outlet } from "react-router";

const MusicLayout = () => {
  return (
    <div className="h-full flex flex-col gap-12">
      <h1 className="text-6xl font-semibold">Music</h1>
      <Outlet />
    </div>
  );
};

export default MusicLayout;

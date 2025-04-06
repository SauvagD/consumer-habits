import { Link, Outlet } from "react-router";

export function HomeLayout({ channels }: any) {
  return (
    <main className="flex flex-col gap-12 min-h-lvh p-12 items-center w-full">
      <div className="flex flex-col gap-4 w-full max-w-[1200px]">
        <h1>Vos chaines youtube préférées</h1>
        <div
          className="flex flex-row gap-12 w-full  p-4"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            overflowX: "scroll",
            width: "100%",
          }}
        >
          {channels.map(({ id, views, title, image }: any, index: number) => (
            <Link
              key={index + 1}
              to={id}
              className="flex flex-col min-w-1/4 aspect-square border-2 border-gray-300 overflow-hidden rounded-lg h-auto cursor-pointer"
            >
              <img src={image} alt="" className="w-full h-auto object-cover" />
              <div className="p-2 flex flex-row justify-between">
                <p>{title}</p>
                <p>{views}</p>
              </div>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </main>
  );
}

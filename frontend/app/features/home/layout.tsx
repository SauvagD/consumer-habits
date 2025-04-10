import { Link } from "react-router";

export function HomeLayout({ channels }: any) {
  return (
    <main className="w-full overflow-auto flex justify-center align-center max-h-lvh pb-4">
      <div className="grid grid-cols-4 gap-4 p-4 max-w-[1200px]">
        {channels.map(({ id, views, title, image }: any, index: number) => (
          <Link key={index + 1} to={id} className="cursor-pointer">
            <div className="grid grid-cols-16 grid-rows-4 w-full h-full size-full overflow-hidden border-2 border-gray-300 rounded-lg">
              <img
                src={image}
                alt=""
                className="col-span-12 row-span-12 object-contain "
              />
              <div className="bg-gray-300 col-start-13 col-span-4 row-span-4 p-2 flex items-center justify-center font-bold">
                {views}
              </div>

              <div className="bg-gray-100 col-span-16 p-2 row-start-13 flex items-center justify-center font-bold">
                {title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

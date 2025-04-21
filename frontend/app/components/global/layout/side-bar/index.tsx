import { AudioLines, ImagePlay, LibraryBig, TvMinimalPlay } from "lucide-react";
import { Link, useLocation } from "react-router";

const links = [
  { href: "/music", label: "Music", value: "music", icon: AudioLines },
  { href: "/anime", label: "anime", value: "anime", icon: ImagePlay },
  { href: "/movie", label: "movie", value: "movie", icon: TvMinimalPlay },
  { href: "/book", label: "book", value: "book", icon: LibraryBig },
];

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-around gap-4">
      {links.map((link) => (
        <Link
          key={link.value}
          to={link.href}
          data-active={location.pathname === link.href}
          className="p-6 group bg-white shadow-2xl cursor-pointer rounded hover:data-[active=false]:scale-120 hover:bg-black transition-all data-[active=true]:bg-black"
        >
          {
            <link.icon className="group-hover:text-white transition-all group-data-[active=true]:text-white" />
          }
        </Link>
      ))}
    </div>
  );
};

export default SideBar;

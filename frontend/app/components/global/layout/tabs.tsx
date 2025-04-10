import { Link } from "react-router";

export const Tabs = ({ children }: any) => {
  return <div className="flex flex-row">{children}</div>;
};

export const Tab = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="flex tab px-4 py-2 text-sm font-medium border-t-4 border-transparent hover:bg-gray-100"
    >
      {children}
    </Link>
  );
};

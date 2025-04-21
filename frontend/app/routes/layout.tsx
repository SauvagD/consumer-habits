import { Outlet } from "react-router";
import Layout from "~/components/global/layout";

const MainLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;

import { getChannels } from "~/api/music";
import { HomeLayout } from "~/features/home/layout";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await getChannels();
  return response.data;
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return <HomeLayout channels={loaderData} />;
}

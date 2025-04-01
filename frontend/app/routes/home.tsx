import { getContent } from "~/api/music";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const { data } = await getContent();

  return data;
}

export default function Home({ loaderData }: any) {
  return <Welcome data={loaderData} />;
}

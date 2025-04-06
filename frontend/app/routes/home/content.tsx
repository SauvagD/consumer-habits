import { getMusicsFromChannel } from "~/api/music";
import HomeContent from "~/features/home/content";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const response = await getMusicsFromChannel(params.channelId!);
  return response.data;
}

export default function Content({ loaderData }: Route.ComponentProps) {
  return <HomeContent musics={loaderData} />;
}

import { getMusicSummary } from "~/api/music";
import MusicPage from "~/features/music/music.page";
import type { Route } from "./+types";

export async function loader() {
  return (await getMusicSummary()).data;
}

const Index = async ({ loaderData }: Route.ComponentProps) => {
  return <MusicPage data={loaderData} />;
};

export default Index;

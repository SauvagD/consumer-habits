import { Headphones, LucideTrophy, User } from "lucide-react";
import { Link } from "react-router";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import MusicArtist from "./components/artist";
import MusicPlayer from "./components/player";

type MusicPageSectionProps = {
  className: string;
  icon: (props: any) => React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
};

const MusicPageSection = ({
  className,
  icon: Icon,
  title,
  description,
  children,
}: MusicPageSectionProps) => {
  return (
    <Card className={cn("bg-white p-4 h-full", className)}>
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <Icon size={20} />
            <p className="text-lg font-semibold">{title}</p>
          </div>
          <p className="text-xs text-gray-700">{description}</p>
        </div>
        {children}
      </div>
    </Card>
  );
};

const history = [
  {
    lastViewedAt: "2025-04-05 20:22:08",
    title: "Coldplay - Viva La Vida (Official Video)",
    image: "https://i.ytimg.com/vi/dvgZkm1xWPE/default.jpg",
    url: "https://youtube.com/watch?v=dvgZkm1xWPE",
  },
  {
    lastViewedAt: "2025-04-06 13:15:22",
    title: "Daft Punk - One More Time",
    image: "https://i.ytimg.com/vi/FGBhQbmPwH8/default.jpg",
    url: "https://youtube.com/watch?v=FGBhQbmPwH8",
  },
  {
    lastViewedAt: "2025-04-06 22:01:47",
    title: "Adele - Rolling in the Deep",
    image: "https://i.ytimg.com/vi/rYEDA3JcQqw/default.jpg",
    url: "https://youtube.com/watch?v=rYEDA3JcQqw",
  },
  {
    lastViewedAt: "2025-04-07 09:30:00",
    title: "Drake - God's Plan",
    image: "https://i.ytimg.com/vi/xpVfcZ0ZcFM/default.jpg",
    url: "https://youtube.com/watch?v=xpVfcZ0ZcFM",
  },
  {
    lastViewedAt: "2025-04-08 16:44:18",
    title: "Billie Eilish - bad guy",
    image: "https://i.ytimg.com/vi/DyDfgMOUjCI/default.jpg",
    url: "https://youtube.com/watch?v=DyDfgMOUjCI",
  },
  {
    lastViewedAt: "2025-04-09 19:21:37",
    title: "Ed Sheeran - Shape of You [Official Video]",
    image: "https://i.ytimg.com/vi/JGwWNGJdvx8/default.jpg",
    url: "https://youtube.com/watch?v=JGwWNGJdvx8",
  },
  {
    lastViewedAt: "2025-04-10 08:59:13",
    title: "The Weeknd - Blinding Lights",
    image: "https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg",
    url: "https://youtube.com/watch?v=4NRXx6U8ABQ",
  },
  {
    lastViewedAt: "2025-04-11 14:28:05",
    title: "Imagine Dragons - Believer",
    image: "https://i.ytimg.com/vi/7wtfhZwyrcc/default.jpg",
    url: "https://youtube.com/watch?v=7wtfhZwyrcc",
  },
  {
    lastViewedAt: "2025-04-12 11:45:50",
    title: "Bruno Mars - That's What I Like",
    image: "https://i.ytimg.com/vi/PMivT7MJ41M/default.jpg",
    url: "https://youtube.com/watch?v=PMivT7MJ41M",
  },
  {
    lastViewedAt: "2025-04-13 17:33:29",
    title: "Post Malone - Circles",
    image: "https://i.ytimg.com/vi/wXhTHyIgQ_U/default.jpg",
    url: "https://youtube.com/watch?v=wXhTHyIgQ_U",
  },
];

const suggestions = [
  {
    title: "Coldplay - Viva La Vida (Official Video)",
    image: "https://i.ytimg.com/vi/dvgZkm1xWPE/default.jpg",
    url: "https://youtube.com/watch?v=dvgZkm1xWPE",
    id: "dvgZkm1xWPE",
  },
  /*   {
    title: "Daft Punk - One More Time",
    image: "https://i.ytimg.com/vi/FGBhQbmPwH8/default.jpg",
    url: "https://youtube.com/watch?v=FGBhQbmPwH8",
    id: "FGBhQbmPwH8",
  },
  {
    title: "Billie Eilish - bad guy",
    image: "https://i.ytimg.com/vi/DyDfgMOUjCI/default.jpg",
    url: "https://youtube.com/watch?v=DyDfgMOUjCI",
    id: "DyDfgMOUjCI",
  }, */
];

const topArtists = [
  {
    name: "The Weeknd",
    image: "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
    url: "https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ",
    views: 34, // L'utilisateur a écouté 34 musiques de lui
  },
  {
    name: "Billie Eilish",
    image: "https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg",
    url: "https://www.youtube.com/channel/UCiGm_E4ZwYSHV3bcW1pnSeQ",
    views: 21,
  },
  {
    name: "Drake",
    image: "https://i.ytimg.com/vi/xpVfcZ0ZcFM/hqdefault.jpg",
    url: "https://www.youtube.com/channel/UCByOQJjav0CUDwxCk-jVNRQ",
    views: 17,
  },
];

const MusicPage = ({ data }: any) => {
  const { music, artists } = data;
  console.log("artists", artists);
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 w-full h-full overflow-hidden">
      <MusicPageSection
        className="row-span-3"
        icon={Headphones}
        title="Vos récentes écoutes"
        description="Ci-dessous se trouvent vos écoutent les plus récentes provenant de différentes sources"
      >
        <div className="flex flex-col gap-4 h-full overflow-y-auto flex-1">
          {music.map(({ id, media }: any) => (
            <Link
              key={"music-" + id}
              to={"https://www.youtube.com/watch?v=" + media.resource_id}
              target="_blank"
              className="flex flex-row justify-between w-full px-2 py-2 cursor-pointer hover:bg-gray-200 rounded"
            >
              <div className="flex flex-row gap-2">
                <div className="relative w-10 h-10">
                  <img
                    src={media.image}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm">{media.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </MusicPageSection>
      <MusicPageSection
        className="col-span-2"
        icon={User}
        title="Vos artistes préférés"
        description="Les artistes que vous aimez le plus selon vos écoutes"
      >
        <div className="flex flex-row justify-around flex-wrap flex-1">
          {artists.map((artist: any) => (
            <MusicArtist key={artist.name} {...artist} />
          ))}
        </div>
      </MusicPageSection>
      <MusicPageSection
        className="col-span-2 row-span-2"
        icon={LucideTrophy}
        title="Suggestions"
        description="Voici une liste de musiques que vous êtes susceptibles d'aimez"
      >
        <div className="flex flex-col gap-4 h-full overflow-y-auto flex-1">
          {suggestions.map((suggestion) => (
            <MusicPlayer
              key={suggestion.title}
              {...suggestion}
              description=""
            />
          ))}
        </div>
      </MusicPageSection>
    </div>
  );
};

export default MusicPage;

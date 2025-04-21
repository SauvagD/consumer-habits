import { Pause, Play, Volume } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function useYoutubePlayer(videoId: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Charger l'API YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId,
        events: {
          onReady: onPlayerReady,
        },
      });
    };
  }, []);

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  const playVideo = () => {
    if (playerRef.current) {
      setIsPlaying(true);
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    if (playerRef.current) {
      setIsPlaying(false);
      playerRef.current.pauseVideo();
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pauseVideo();
      return;
    }
    playVideo();
  };

  return {
    toggle,
    isPlaying,
    ref: iframeRef,
  };
}

const MusicPlayer = ({
  id,
  image,
  title,
  description,
}: {
  id: string;
  image: string;
  title: string;
  description: string;
}) => {
  const { ref, toggle, isPlaying } = useYoutubePlayer(id);
  return (
    <div>
      <div
        ref={ref}
        style={{
          width: 1,
          height: 1,
        }}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="relative size-20">
            <img
              src={image}
              alt=""
              width={30}
              height={30}
              className="rounded object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full items-center">
          <div
            className="rounded-full flex items-center justify-center size-6 bg-black"
            onClick={toggle}
          >
            {isPlaying ? (
              <Pause size={12} color="white" />
            ) : (
              <Play size={12} color="white" />
            )}
          </div>
          <div className="rounded-full flex items-center justify-center size-6 bg-black">
            <Volume size={16} color="white" />
          </div>
          <div className="bg-black rounded-full flex-1 h-2" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

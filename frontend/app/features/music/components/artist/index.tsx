type MusicArtistProps = {
  image: string;
  name: string;
  views: number;
};

const MusicArtist = ({ image, name, views }: MusicArtistProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-w-1/3">
      <div className="relative size-20 overflow-hidden rounded">
        <img
          src={image}
          width={50}
          height={50}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="text-center">{name}</p>
        <p className="text-sm text-gray-500 text-center">{views} streams</p>
      </div>
    </div>
  );
};

export default MusicArtist;

import { useEffect, useState } from "react";
import type { IArtist } from "src/types/artist";
import type { ServiceResponse } from "src/types/serviceResponse";

export const ArtistsSectionComponent: React.FC = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [artistId, setArtistId] = useState(0);

  const handleFetchArtists = async () => {
    const response = await fetch("http://localhost:1234/artists");
    const { data }: ServiceResponse<IArtist[]> = await response.json();
    setArtists(data);
  };

  const handleNavigateToArtist = (artist: IArtist) => {
    location.href = `/artists/${artist.name.toLowerCase()}-${artist.lastname.toLowerCase()}-${artist.id}`;
  };

  useEffect(() => {
    handleFetchArtists();
  }, []);

  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden">
      <section className="flex flex-col items-center md:items-end gap-2 text-4xl md:text-6xl font-bold py-8 md:p-0 md:pt-20 pr-8 md:border-r md:row-start-1 md:row-end-2">
        {artists.map((artist) => (
          <h3
            className="cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
            onMouseEnter={() => setArtistId(artist.id)}
            onMouseLeave={() => setArtistId(0)}
            onClick={() => handleNavigateToArtist(artist)}
          >{`${artist.name} ${artist.lastname}`}</h3>
        ))}
      </section>

      {artistId !== 0 && (
        <section className="justify-start overflow-hidden">
          <img
            id="artist-image"
            src={artists.find((artist) => artist.id === artistId)?.image}
            alt="Hovered Artist's Image"
            className="w-full md:w-3/5 md:pt-20 md:pl-8 md:pb-8 aspect-square"
          />
        </section>
      )}
    </section>
  );
};

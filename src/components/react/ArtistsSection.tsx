import ArtistImage from "@components/ArtistImage.astro";
import { API_URL } from "@const/consts";
import { useEffect, useState } from "react";
import type { IArtist } from "src/types/artist";
import type { ServiceResponse } from "src/types/serviceResponse";

export const ArtistsSectionComponent: React.FC = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [artistId, setArtistId] = useState(0);

  const handleFetchArtists = async () => {
    const response = await fetch(`${API_URL}/artists`);
    const { data }: ServiceResponse<IArtist[]> = await response.json();
    setArtists(data);
  };

  useEffect(() => {
    handleFetchArtists();
  }, []);

  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden">
      <section className="flex flex-col items-center md:items-end gap-2 font-bold py-8 md:p-0 md:pt-20 pr-8 md:border-r md:row-start-1 md:row-end-2">
        {artists.map((artist) => (
          <a
            href={`/artists/${artist.name.toLowerCase()}-${artist.lastname.toLowerCase()}-${artist.id}`}
          >
            <h3
              className="cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out text-4xl"
              onMouseEnter={() => setArtistId(artist.id)}
              onMouseLeave={() => setArtistId(0)}
            >{`${artist.name} ${artist.lastname}`}</h3>
          </a>
        ))}
      </section>

      {artistId !== 0 && (
        <ArtistImage
          artistImage={
            artists.find((artist) => artist.id === artistId)?.image ?? ""
          }
        />
      )}
    </section>
  );
};

import Artwork from "@components/Artwork.astro";
import { API_URL } from "@const/consts";
import { useEffect, useState } from "react";
import type { IArtwork } from "../../types/artwork";
import type { ServiceResponse } from "../../types/serviceResponse";

export const ItemsContainerComponent: React.FC = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);

  const handleFetchArtists = async (search: string = "") => {
    console.log("llego");

    const response = await fetch(`${API_URL}/artworks/${search}`);
    const { data: artworks }: ServiceResponse<IArtwork[]> =
      await response.json();
    setArtworks(artworks);
  };

  useEffect(() => {
    handleFetchArtists();
  }, []);

  return (
    <main className="bg-light overflow-y-auto flex flex-col justify-between items-center">
      <header className="border border-t-0 border-primary flex w-full">
        <h3 className="uppercase font-medium text-center flex grow justify-end">
          categorias
        </h3>
        <input
          id="search"
          type="text"
          placeholder="Buscar"
          className="font-medium w-1/2 md:w-1/6 border-l border-primary bg-light box-border mx-4 placeholder:uppercase bg-transparent pl-4 focus:outline-none"
        />
      </header>
      <div
        id="artwork-container"
        className="w-full overflow-y-hidden grid md:grid-cols-4 gap-12 py-8 md:py-6 px-12"
      >
        {artworks.map((artwork) => {
          return <Artwork artwork={artwork} />;
        })}
      </div>
    </main>
  );
};

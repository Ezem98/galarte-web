import { atom } from "nanostores";
import type { IArtist } from "src/types/artist";

export const storedArtist = atom<IArtist | undefined>();

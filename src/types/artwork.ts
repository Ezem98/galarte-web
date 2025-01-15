export interface IArtwork {
  id: number;
  name: string;
  description?: string;
  code: string;
  serialNumber: string;
  width: number;
  height: number;
  length?: number;
  technique: string;
  framed: number;
  year: string;
  image: string;
  artistId: number;
  price: number;
  isUnique: number;
  createdAt: string;
  updatedAt: string;
}

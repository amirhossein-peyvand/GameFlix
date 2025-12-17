import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";


export interface Game {
  background_image: string;
  description_raw: string;
  genres: Genre[]
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform; }[];
  publishers: Publisher[];
  rating_top: number;
  slug: string;
}

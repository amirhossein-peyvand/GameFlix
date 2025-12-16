import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import ms from 'ms'
import type { FetchResponse } from "@/services/api-client";
import type { GameQuery } from "@/App";
import type { Platform } from "./usePlatforms";


const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number;
  rating_top: number;
}

// const useGames = (gameQuery: GameQuery) => 
//   useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ['games', gameQuery],
//     queryFn: ({pageParam=1}) => apiClient.getAll({
//       params: { 
//           genres: gameQuery.genre?.id, 
//           parent_platforms: gameQuery.platform?.id, 
//           search: gameQuery.searchText,
//           page: pageParam
//         }
//     }),
//     getNextPageParam: (lastPage, allPages) => {
//       return allPages.length + 1;
//     }
//     })
// export default useGames;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            search: gameQuery.searchText,
            page: pageParam,
          },
        }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
  });

export default useGames;

import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // if (game.id == 3498)
  //   return (
  //     <Card.Root
  //       borderRadius={10}
  //       overflow="hidden"
  //       marginTop="40px"
  //       marginLeft="40px"
  //     >
  //       <Image src={game.background_image} />
  //       <Card.Body>
  //         <Heading fontSize="2xl">{game.name}</Heading>
  //         <PlatformIconList
  //           platforms={game.parent_platforms.map((p) => p.platform)}
  //         />
  //       </Card.Body>
  //     </Card.Root>
  //   );
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      {...(game.id === 3498 && {
        marginTop: "40px",
        marginLeft: "40px",
      })}
    >
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

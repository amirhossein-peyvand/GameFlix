import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="10px" listStyleType="none">
          <HStack>
            <Image
              boxSize="38px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

const HomePage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {isDesktop && (
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      )}

      <GridItem area="main">
        <Box marginY={5} padding="0 10px 0">
          <GameHeading />
          <PlatformSelector />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

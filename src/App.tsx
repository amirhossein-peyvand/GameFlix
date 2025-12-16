import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"`,
        lg: `"nav nav"                 // 1024px
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
}

export default App;

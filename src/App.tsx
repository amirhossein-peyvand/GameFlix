import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {isDesktop && <GridItem area="aside">Aside</GridItem>}

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

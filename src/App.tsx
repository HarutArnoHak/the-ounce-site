import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";

import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav " "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">Nav</GridItem>
      <GridItem area="main">
        <ProductGrid />;
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
    </Grid>
  );
}

export default App;

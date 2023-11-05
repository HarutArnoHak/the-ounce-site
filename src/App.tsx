import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";

import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav " "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="main">
        <ProductGrid />;
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="nav">
        <Flex
          as="header"
          position="fixed"
          backgroundColor="rgba(23,25,35, 1)"
          backdropFilter="saturate(180%) blur(5px)"
          w="100%"
        >
          <NavBar />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;

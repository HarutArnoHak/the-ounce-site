import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";

const ProductGrid = () => {
  const { products } = useProduct();

  return (
    <>
      <Box height={90}></Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={3}>
        {products.map((product) =>
          product.options[0].inventory.hasOwnProperty("amount") ? (
            <ProductCardContainer key={product.id}>
              <ProductCard product={product}></ProductCard>
            </ProductCardContainer>
          ) : (
            false
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;

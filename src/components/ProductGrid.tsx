import { SimpleGrid } from "@chakra-ui/react";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";

const ProductGrid = () => {
  const { products } = useProduct();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
      spacing={3}
      padding={10}
    >
      {products.map((product) => (
        <ProductCardContainer key={product.id}>
          <ProductCard product={product}></ProductCard>
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;

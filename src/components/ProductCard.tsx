import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import useProduct, { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={product.photos[0]?.fullPath}
        alt={product.name}
      />

      <Stack>
        <CardBody>
          <Text py="2" color="ButtonFace">
            {product.brand?.name}
          </Text>
          <Heading size="md">{product.name}</Heading>

          <Text py="2"></Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid">Buy</Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProductCard;

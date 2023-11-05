import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <HStack align={"self-start"}>
        <Box boxSize={"30%"}>
          <Image
            padding={0}
            margin={0}
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={product.photos[0]?.fullPath}
            alt={product.name}
          />
        </Box>
        <CardBody>
          <Text py="2" color="ButtonFace" align={"start"}>
            {product.brand?.name}
          </Text>
          <Heading size="sm">{product.name}</Heading>

          <Text py="2"></Text>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default ProductCard;

{
  /* <Card
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
    </Card> */
}

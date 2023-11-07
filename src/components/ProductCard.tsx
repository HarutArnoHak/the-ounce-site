import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProduct";
import noProdImage from "../assets/noProductImage.png";
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
            src={
              product.photos.length > 0
                ? product.photos[0].fullPath
                : noProdImage
            }
            alt={product.name}
          />
        </Box>
        <CardBody>
          <Text py="2" color="ButtonFace" align={"start"}>
            {product.brand?.name}" "{product.primaryCategory.name}
          </Text>
          <Heading size="sm">{product.name}</Heading>

          <Text>
            {Number(product.options[0].inventory.amount) > 3
              ? product.options[0].inventory.amount
              : "Out Of Stock"}
          </Text>
          {/* <Text>{product.description}</Text> */}
        </CardBody>
      </HStack>
    </Card>
  );

  return null;
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

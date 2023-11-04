import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import useProduct, { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image objectFit={"cover"} src={product.photos[0]?.fullPath} />
      <CardBody>
        <Heading fontSize={"2xl"}>{product.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image
        boxSize="200px"
        objectFit={"fill"}
        src={product.photos[0]?.fullPath}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{product.brand.name}</Heading>
        <Heading fontSize={"md"}>{product.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

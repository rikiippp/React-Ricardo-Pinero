import { useParams } from "react-router-dom";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Text } from '@chakra-ui/react';
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const product = productos.find((producto) => producto.id == id);

  return (
    <>
      <Card maxW='sm' m='auto' gap='4' key={product.id}>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <img src={product.img} alt="Imagenes de los productos" />
            <Heading size='md'>{product.nombre}</Heading>
          </Stack>
          <Text>{product.descripcion}</Text>
          <Text>${product.precio}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount product={product} />
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;

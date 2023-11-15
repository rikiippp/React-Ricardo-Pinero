import { useParams } from "react-router-dom";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Text, Box, Button } from '@chakra-ui/react';
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ producto }) => {

  const [quantity, setQuantity] = useState(0)
  const { addProduct } = useContext(CartContext)

  const incrementQuantity = () => {
    const resultado = quantity + 1
    setQuantity(resultado);
  };

  const decrementQuantity = () => {
    const resultado = quantity - 1
    if (quantity >= 0) {
      setQuantity(resultado);
    }
  };

  const addProductToCart = () => addProduct(producto, quantity)

  return (
    <>
      <Card maxW='sm' m='auto' gap='4' key={product.id}>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <img src="" alt="Imagenes de los productos" />
            <Heading size='md'>{product.nombre}</Heading>
          </Stack>
          <Text>{product.descripcion}</Text>
          <Text>${product.precio}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount incrementar={incrementQuantity} decrementar={decrementQuantity} quantity={quantity} />
          <Box pl={4}>
            <Button bg='#4ca83a' _hover={{ background: '#2e5f25', color: 'white' }} onClick={addProductToCart}>Agregar Al Carrito</Button>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;

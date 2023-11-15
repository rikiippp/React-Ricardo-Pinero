import { Card, CardBody, Stack, Heading, CardFooter, Text, Box, Button } from '@chakra-ui/react';
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
    if (quantity > 0) {
      setQuantity(resultado);
    } 
  };

  const addProductToCart = () => addProduct(producto, quantity)

  return (
    <>
      <Card shadow='3px 3px 3px #9fa6b2' border='1px solid #9fa6b2;' maxW='sm' m='20px auto' w='24rem' key={producto.id}>
        <CardBody>
          <Stack>
            <img src={producto.image} alt="Imagenes de los productos" />
            <Heading size='md' m='20px 0' fontSize='22px'>{producto.nombre}</Heading>
          </Stack>
          <Text fontSize='16px'>{producto.descripcion}</Text>
          <Text fontWeight='bold'>${producto.precio}</Text>
        </CardBody>
        <CardFooter>
          <ItemCount incrementar={incrementQuantity} decrementar={decrementQuantity} quantity={quantity} />
          <Box pl={4}>
            <Button color='white' bg='#533983' _hover={{ background: '#8D3F6F', color: 'white' }} onClick={addProductToCart}>Agregar Al Carrito</Button>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;

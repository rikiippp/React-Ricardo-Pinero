import { useContext, useState } from 'react';
import { Flex, Box, Button, Spacer } from '@chakra-ui/react';
import { CartContext } from '../context/cartContext';

const ItemCount = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart, addProduct, , , , , isInCart] = useContext(CartContext);

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1);
        }
    };

    const addToCart = () => {
        if (quantity > 0) {
            const indexItem = isInCart(product.id);

            if (indexItem !== -1) {
                let newCart = [...cart];
                newCart[indexItem].quantity += quantity;
                setCart(newCart);
            } else {
                addProduct(product, quantity);
            }

            setQuantity(0);
            
            console.log("Contenido del carrito después de añadir al carrito:", cart);

        }
    };

    return (
        <Flex>
            <Box>
                <Button variant='outline' colorScheme='teal' onClick={decrementQuantity}>-</Button>
                <Button>{quantity}</Button>
                <Button variant='outline' colorScheme='teal' onClick={incrementQuantity}>+</Button>
            </Box>
            <Spacer />
            <Box pl={4}>
                <Button bg='#4ca83a' _hover={{ background: '#2e5f25', color: 'white' }} onClick={addToCart}>
                    Agregar Al Carrito
                </Button>
            </Box>
        </Flex>
    );
};

export default ItemCount;



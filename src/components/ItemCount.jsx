import { Flex, Box, Button, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
const ItemCount = () => {
    const [count, setCount] = useState(0);

    return (
        <Flex>
            <Box>
                <Button variant="outline" colorScheme="teal"
                    onClick={() => {
                        if (count > 0) {
                            setCount(count - 1);
                        }
                    }}
                    m={1}>-</Button>
                <Button m={1}>{count}</Button>
                <Button variant="outline" colorScheme="teal"
                    onClick={() => setCount(count + 1)}
                    m={1}
                >+</Button>
            </Box>
            <Spacer />
            <Box m={1}>
                <Button bg='#4ca83a'
                    _hover={{
                        background: "#2e5f25",
                        color: "white",
                    }}>Agregar Al Carrito</Button>
            </Box>
        </Flex>
    );
};

export default ItemCount;
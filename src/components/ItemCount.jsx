import { Flex, Box, Button } from '@chakra-ui/react';

const ItemCount = ({ incrementar, decrementar, quantity }) => {

    return (
        <Flex>
            <Box>
                <Button variant='outline' colorScheme='teal' onClick={decrementar}>-</Button>
                <Button>{quantity}</Button>
                <Button variant='outline' colorScheme='teal' onClick={incrementar}>+</Button>
            </Box>
        </Flex>
    );
};

export default ItemCount;



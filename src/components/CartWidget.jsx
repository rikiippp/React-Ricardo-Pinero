import cart from '../assets/cart.png';
import { Badge } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <>
      <img className='logoCart' src={cart} alt='Carrito' />
      <Badge pos="absolute" right="7" top="16" fontSize="18px" bg="#8abe53">3</Badge>
    </>
  )
}

export default CartWidget
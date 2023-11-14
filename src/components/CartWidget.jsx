import ImgCart from '../assets/cart.png';
import { Badge } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';


const CartWidget = () => {

  const {cantidadProductosCart} = useContext(CartContext)


  return (
    <Link to={"/cart"}>
      <div>
      <img className='logoCart' src={ImgCart} alt='Carrito' />
      <Badge pos="absolute" right="7" top="16" fontSize="18px" bg="#8abe53">{cantidadProductosCart}</Badge>
      </div>
    </Link>
    
  )
}

export default CartWidget
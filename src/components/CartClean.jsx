import { Link } from "react-router-dom"
import emptyCart from '../assets/empty-cart.png'

export const CartVacio = () => {
  return (
    <div className="container-cartClean">
      <p>Tu carrito esta vacio</p>
      <img src={emptyCart} alt="Empty Cart" />
      <p>Agrega productos para poder comprar</p>
      <Link  to={"/"} className="button-violet">
        Inicio 
      </Link>
    </div>
  )
}
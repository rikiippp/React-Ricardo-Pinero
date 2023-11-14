import { Link } from "react-router-dom"

export const CartVacio = () => {
  return (
    <div>
      <p>Tu carrito esta vacio</p>
      <b>Agrega productos para poder comprar</b>
      <Link  to={"/"}>
        Go to main page
      </Link>
    </div>
  )
}
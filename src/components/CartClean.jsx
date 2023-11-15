import { Link } from "react-router-dom"

export const CartVacio = () => {
  return (
    <div className="container-cartClean">
      <p>Tu carrito esta vacio</p>
      <b>Agrega productos para poder comprar</b>
      <Link  to={"/"}>
        Inicio 
      </Link>
    </div>
  )
}
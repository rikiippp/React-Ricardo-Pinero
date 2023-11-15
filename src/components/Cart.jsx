import { useContext } from "react"
import { CartVacio } from "./CartClean"
import { CartContext } from "../context/cartContext"
import { Link } from "@chakra-ui/react";


const Cart = () => {
  const { cart, cantidadProductosCart, removeProduct, obtenerTotalPrecioCart } = useContext(CartContext);

  const removeProductHandle = (id) => removeProduct(id);

  return cantidadProductosCart() !== 0 ? (
    <div>
      {cart && cart.map((product) => {
        return (
          <div key={product.id} >
            <img src={product.img} alt="img" />
            <div>
              <p >{product.nombre}</p>
              {product.descripcion}
            </div>
            <div >
              <p>Quantity: {product.quantity}</p>
              <p>TOTAL: {product.precio * product.quantity}</p>
            </div>
            <button onClick={() => removeProductHandle(product.id)}>
              <span>❌</span>
            </button>
          </div>
        );
      })}
      <div>
        <h2 >total a pagar: ${obtenerTotalPrecioCart()}</h2>
      </div>

      <Link to={`/`}>
        <button className="buttonCart">Finalizar compra</button>
      </Link>
    </div>
  ) : (
    <CartVacio />
  );
};

export default Cart;
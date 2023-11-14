import { useContext } from "react"
import { CartVacio } from "./CartClean"
import { CartContext } from "../context/cartContext"
import { Link } from "@chakra-ui/react";


const Cart = () => {
  const { cart, cantidadProductosCart, removeProduct, obtenerTotalPrecioCart } = useContext(CartContext);

  const removeProductHandle = (id) => removeProduct(id);

  return cantidadProductosCart !== 0 ? (
    <div className="flex flex-col justify-center m-2">
      {cart && cart.map((product) => {
        return (
          <div key={product.id} >
            <img src={product.img} alt="IMAGE" />
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
        <h2 >The total is: ${obtenerTotalPrecioCart}</h2>
      </div>

      <Link to={`/`}>Go to payment page!</Link>
    </div>
  ) : (
    <CartVacio />
  );
};

export default Cart;
import { useContext } from "react"
import { CartVacio } from "./CartClean"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, cantidadProductosCart, removeProduct, obtenerTotalPrecioCart, limpiarCart } = useContext(CartContext);

  const removeProductHandle = (id) => removeProduct(id);

  return cantidadProductosCart() !== 0 ? (
    <div className="container-cart">
      {cart && cart.map((product) => {
        return (
          <div className="card-cart" key={product.id}>
            <img src={product.image} alt="img" />
            <div className="card-content-cart">
              <p>{product.nombre}</p>
              <p>{product.descripcion}</p>
              <div >
                <p>CANT: {product.quantity}</p>
                <p>TOTAL: {product.precio * product.quantity}</p>
              </div>
              <button onClick={() => removeProductHandle(product.id)}>
                <span>❌</span>
              </button>
            </div>
          </div>
        );
      })}
      <div className="total-pagar">
        <p>Total a pagar: ${obtenerTotalPrecioCart()}</p>
      </div>
      <button onClick={limpiarCart} className="button-clearCart">Limpiar</button>
      <Link to='/checkout'>
        <button className="button-violet">Checkout</button>
      </Link>
    </div>
  ) : (
    <CartVacio />
  );
};

export default Cart;
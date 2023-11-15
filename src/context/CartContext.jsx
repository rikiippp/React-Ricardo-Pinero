import { createContext, useState } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProduct = (product, quantity) => {
        const idItem = isInCart(product.id)
        if (idItem !== -1) {
            const updateCart = [...cart]
            updateCart[idItem].quantity += quantity
            setCart(updateCart)
        } else {
            setCart((prev) => [...prev, { ...product, quantity }])
            toast.success(`Se agrego ${quantity} unidades de ${product.nombre}`, {
                position: "bottom-right",
                transition: Slide,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }

    const removeProduct = (productId) => {
        const indexItem = isInCart(productId);

        if (indexItem !== -1) {
            let newCart = [...cart];

            if (newCart[indexItem].quantity > 1) {
                // Si hay más de una unidad, simplemente decrementa la cantidad
                newCart[indexItem].quantity -= 1;
            } else {
                // Si hay solo una unidad, elimina completamente el producto del carrito
                newCart = newCart.filter(producto => producto.id !== productId);
            }

            setCart(newCart);
        }
    };

    const obtenerTotalPrecioCart = () => cart.reduce((acc, { precio, quantity }) => acc + precio * quantity, 0)

    const limpiarCart = () => {
        setCart([])
    }

    const cantidadProductosCart = () => cart.length

    const isInCart = (id) => cart.findIndex(product => product.id === id)

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, limpiarCart, obtenerTotalPrecioCart, cantidadProductosCart, isInCart }}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    )
}

export default CartProvider
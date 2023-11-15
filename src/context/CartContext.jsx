import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProduct = (product, quantity) => {
        const indexItem = isInCart(product.id)
        if (indexItem !== -1) {
            let updateCart = [...cart]
            updateCart[indexItem].quantity += quantity
            setCart(updateCart)
        } else {
            setCart((prev) => [...prev, { ...product, quantity }])
        }

    }

    const removeProduct = (productId) => {
        const newCart = cart.filter(producto => producto.id !== productId)
        setCart(newCart)
    }

    const obtenerTotalPrecioCart = () => cart.reduce((acc, { precio, quantity }) => acc + precio * quantity, 0)
    
    const limpiarCart = () => {
        setCart([])
    }
    
    const cantidadProductosCart = () => cart.length

    const isInCart = (id) => cart.findIndex(product => product.id === id)

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, limpiarCart, obtenerTotalPrecioCart, cantidadProductosCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  // Estado para almacenar el carrito y el producto actual.
  const [cart, setCart] = useState([])
  const [producto, setProducto] = useState([])
  // Obtengo el parámetro 'id' de la URL utilizando el hook useParams.
  const { id } = useParams();

  // Efectt que se ejecuta al montar el componente para obtener detalles del producto.
  useEffect(() => {

    const db = getFirestore()

    const oneItem = doc(db, "productos", `${id}`);

    getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()) {
            setProducto({ id: snapshot.id, ...snapshot.data() });
        }
    })
}, [])

  // Función para agregar un producto al carrito.
  const addProductToCart = (producto, quantity) => {
    const indexItem = cart.findIndex(item => item.id === producto.id);

    if (indexItem !== -1) {
      // El producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[indexItem].quantity += quantity;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agrégalo
      setCart(prevCart => [...prevCart, { ...producto, quantity }]);
    }

    // Muestra el contenido del carrito en la consola 
    console.log("Contenido del carrito después de agregar:", cart);
  };



  return (
    <>
      <ItemDetail producto={producto} addProduct={addProductToCart}/>

    </>
  )
}

export default ItemDetailContainer
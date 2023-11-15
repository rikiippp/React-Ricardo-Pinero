import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [cart, setCart] = useState([])
  const [producto, setProducto] = useState([])
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore()

    const oneItem = doc(db, `${id}`)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProducto(docs)
      }
    })
  }, [])


  const product = producto.find((producto) => producto.id == id);

  const addProductToCart = (product, quantity) => {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (indexItem !== -1) {
      // El producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[indexItem].quantity += quantity;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agrégalo
      setCart(prevCart => [...prevCart, { ...product, quantity }]);
    }

    // Muestra el contenido del carrito en la consola 
    console.log("Contenido del carrito después de agregar:", cart);
  };



  return (
    <>
      <ItemDetail producto={producto} addProduct={addProductToCart} />

    </>
  )
}

export default ItemDetailContainer
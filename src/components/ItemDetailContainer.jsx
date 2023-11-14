import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const productos = [
    { id: 1, img: "../src/assets/image/aparador.jpg", categoria: "Muebles", nombre: "Aparador de madera", descripcion: "Descripcion del producto", precio: 139 },
    { id: 2, img: "../src/assets/image/lampara.jpg", categoria: "Iluminación", nombre: "Lampara diamante", descripcion: "Descripcion del producto", precio: 20 },
    { id: 3, img: "../src/assets/image/silla-comedor.jpg", categoria: "Muebles", nombre: "Silla comedor", descripcion: "Descripcion del producto", precio: 21 },
    { id: 4, img: "../src/assets/image/sillon.jpg", categoria: "Muebles", nombre: "Sillon de tela", descripcion: "Descripcion del producto", precio: 230 },
    { id: 5, img: "../src/assets/image/escritorio.jpg", categoria: "Muebles", nombre: "Escritorio moderno", descripcion: "Descripcion del producto", precio: 112 },
    { id: 6, img: "../src/assets/image/aloe-vera.jpg", categoria: "Plantas", nombre: "Aloe Vera", descripcion: "Descripcion del producto", precio: 29 },
    { id: 7, img: "../src/assets/image/suculentas.jpg", categoria: "Plantas", nombre: "Suculenta", descripcion: "Descripcion del producto", precio: 25 },
    { id: 8, img: "../src/assets/image/zamioculca.jpg", categoria: "Plantas", nombre: "Zamioculca", descripcion: "Descripcion del producto", precio: 38 },
    { id: 9, img: "../src/assets/image/tubos-led.jpg", categoria: "Iluminación", nombre: "Tubos Leds", descripcion: "Descripcion del producto", precio: 56 },
    { id: 10, img: "../src/assets/image/leds.jpg", categoria: "Iluminación", nombre: "Tiras Leds", descripcion: "Descripcion del producto", precio: 31 }

  ];



  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
    .then(() => {
    })
    .catch((error) => {
      console.log(error)
    })


  const [cart, setCart] = useState([])

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

    // Muestra el contenido del carrito en la consola (puedes ajustar esto según tu lógica real)
    console.log("Contenido del carrito después de agregar:", cart);
  };



  return (
    <>
      <ItemDetail productos={productos} addProduct={addProductToCart} />

    </>
  )
}

export default ItemDetailContainer
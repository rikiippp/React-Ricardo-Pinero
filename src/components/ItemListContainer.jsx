import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { categoria } = useParams()

  const productos = [
    { id: 1, img: "../src/assets/image/aparador.jpg", categoria: "muebles", nombre: "Aparador de madera", descripcion: "Descripcion del producto", precio: 139 },
    { id: 2, img: "../src/assets/image/lampara.jpg", categoria: "iluminación", nombre: "Lampara diamante", descripcion: "Descripcion del producto", precio: 20 },
    { id: 3, img: "../src/assets/image/silla-comedor.jpg", categoria: "muebles", nombre: "Silla comedor", descripcion: "Descripcion del producto", precio: 21 },
    { id: 4, img: "../src/assets/image/sillon.jpg", categoria: "muebles", nombre: "Sillon de tela", descripcion: "Descripcion del producto", precio: 230 },
    { id: 5, img: "../src/assets/image/escritorio.jpg", categoria: "muebles", nombre: "Escritorio moderno", descripcion: "Descripcion del producto", precio: 112 },
    { id: 6, img: "../src/assets/image/aloe-vera.jpg", categoria: "plantas", nombre: "Aloe Vera", descripcion: "Descripcion del producto", precio: 29 },
    { id: 7, img: "../src/assets/image/suculentas.jpg", categoria: "plantas", nombre: "Suculenta", descripcion: "Descripcion del producto", precio: 25 },
    { id: 8, img: "../src/assets/image/zamioculca.jpg", categoria: "plantas", nombre: "Zamioculca", descripcion: "Descripcion del producto", precio: 38 },
    { id: 9, img: "../src/assets/image/tubos-led.jpg", categoria: "iluminación", nombre: "Tubos Leds", descripcion: "Descripcion del producto", precio: 56 },
    { id: 10, img: "../src/assets/image/leds.jpg", categoria: "iluminación", nombre: "Tiras Leds", descripcion: "Descripcion del producto", precio: 31 }

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

  const filtrarProductos = productos.filter((producto) => producto.categoria === categoria)

  return (
    <>
      {categoria ? <ItemList productos={filtrarProductos} /> : <ItemList productos={productos} />}

    </>
  )
}

export default ItemListContainer
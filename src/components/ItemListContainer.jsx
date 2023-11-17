import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'

const ItemListContainer = () => {

  // Obtengo el parámetro 'categoria' de la URL utilizando el hook useParams.
  const { categoria } = useParams()
  // Estado para almacenar la lista de productos.
  const [productos, setProductos] = useState([])

  // Efectt que se ejecuta al montar el componente.
  useEffect(() => {
    // Obtengo una instancia de Firestore.
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    
    // Obtengo los documentos de la colección y actualizo el estado 'productos'.
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
    });
  }, []);
  
  // Filtrado de productos según la categoría (si está presente).
  const filtrarProductos = categoria
  ? productos.filter((productos) => productos.categoria === categoria)
  : productos;


  return (
    <div className='container-cards'> 
      {categoria ? <ItemList productos={filtrarProductos} /> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer
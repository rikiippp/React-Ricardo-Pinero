import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Link } from '@chakra-ui/react';
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { categoria } = useParams()

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
  
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(docs);
    });
  }, []);
  
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
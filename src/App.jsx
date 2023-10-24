import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {


  return (

    <BrowserRouter>

      <NavBar />

    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/categorias/:categoria' element={<ItemListContainer/>}/>
      <Route exact path='/productos/:id' element={<ItemDetailContainer/>}/>


    </Routes>


    </BrowserRouter>

  )
}

export default App

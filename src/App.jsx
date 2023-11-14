import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import Form from './components/Form'
import { CartProvider } from './context/cartContext'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (

    <ChakraProvider>
    <CartProvider>
    <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/categorias/:categoria' element={<ItemListContainer />} />
          <Route exact path='/productos/:id' element={<ItemDetailContainer />} />

        </Routes>

    </BrowserRouter>
    </CartProvider>
    </ChakraProvider>

  )
}

export default App

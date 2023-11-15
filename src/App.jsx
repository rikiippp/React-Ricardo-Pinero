import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/cartContext'
import Checkout from './components/Checkout'

function App() {


  return (

    <BrowserRouter>
      <CartProvider>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/categorias/:categoria' element={<ItemListContainer />} />
          <Route exact path='/productos/:id' element={<ItemDetailContainer />} />
          <Route exac path='/checkout' element={<Checkout />} />
        </Routes>

      </CartProvider>
    </BrowserRouter>

  )
}

export default App

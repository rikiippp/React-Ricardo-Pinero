import { Link } from 'react-router-dom'
import { Card, CardBody, Stack, CardFooter, Heading } from '@chakra-ui/react'


const Item = ({ nombre, id, image }) => {


  return (
      <div className='card' key={id}>
        <img src={image} alt="image" />
        <div className='card-body'>
          <h5>{nombre}</h5>
          <Link to={`/productos/${id}`} className='button'>
            <button>Ver detalles</button>
          </Link>
        </div>
      </div>
  )
}

export default Item
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ nombre, id, img }) => {


  return (
    <div className='container-cards'>
      <div className='card' key={id}>
        <img src={img} alt="image" />
        <div className='card-body'>
          <h5>{nombre}</h5>
          <Link to={`/productos/${id}`} className='button'>
            <button>Ver detalles</button>
          </Link>
        </div>
      </div>
    </div> 


  )
}

export default Item
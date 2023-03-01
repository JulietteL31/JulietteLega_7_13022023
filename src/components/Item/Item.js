import './Item.css'
import { Link } from 'react-router-dom'

function Item({id, title, cover}) {
    return(
        <Link to={`/logement/${id}`} key={id} className='logement'>
            <h2 className='title-logement'>{title}</h2>
            <img src={cover} alt="visuel de l'appartement" className='img-logement'/>
        </Link>
    )
}

export default Item
import error from '../../assets/404.png'
import {Link} from 'react-router-dom'
import './Error.css'
import Header from '../../components/Header/Header'

function Error() {
    return(
        <div>
            <Header linkAbout="noUnderline" linkHome="noUnderline"/>
            <section className='error404-container'>
                <img src={error} className='error404' alt='404'/>
                <h1 className='error404-text'>Oups ! La page que vous demandez n'existe pas.</h1>
                <Link to="/" className='error404-link'>Retourner sur la page d'accueil</Link>
            </section>
        </div>
    )
}

export default Error
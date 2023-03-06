import logo from '../../assets/logo_Kasa.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({linkAbout, linkHome}) {
    return (
            <header className='header'>
                <div className='banner-container'>
                    <img src={logo} alt='logo kasa' className='kasa-logo'/>
                    <nav className='nav'>
                        <Link to="/" className={linkHome}>Accueil</Link>
                        <Link to="/apropos" className={linkAbout}>A propos</Link>
                    </nav>
                </div>
            </header>
    )
}

export default Header
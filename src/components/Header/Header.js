import logo from '../../assets/logo_Kasa.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
            <header className='header'>
                <div className='banner-container'>
                    <img src={logo} alt='logo kasa' className='kasa-logo'/>
                    <nav className='nav'>
                        <Link to="/" className='nav-lien'>Accueil</Link>
                        <Link to="/apropos" className='nav-lien'>A propos</Link>
                    </nav>
                </div>
            </header>
    )
}

export default Header
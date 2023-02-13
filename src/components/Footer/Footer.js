import logo from '../../assets/logo-footer.png'
import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <img src={logo} alt='logo kasa blanc' className='img-footer'/>
            <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
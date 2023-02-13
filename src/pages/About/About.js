import Dropdown from '../../components/Dropdown/Dropdown'
import photo from '../../assets/MaskGroup_Apropos.png'
import './About.css'

function About() {
    return(
        <>
            <div className='section1-content'>
                <img src={photo} alt="fond montagnes" className='mask-content' />
            </div>
            <Dropdown />
        </>
    )
}

export default About
import Dropdown from '../../components/Dropdown/Dropdown'
import photo from '../../assets/MaskGroup_Apropos.png'
import './About.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About() {
    const fiability = <p className='text-about'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>;
    const respect = <p className='text-about'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    const service = <p className='text-about'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    const security = <p className='text-about'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
    return(
        <>
        <Header linkAbout="linkUnderline" linkHome="noUnderline"/>
        <div className='body'>
            <div className='section1-about-content'>
                <img src={photo} alt="fond montagnes" className='mask-content-about' />
            </div>
            <div className='dropdown-about'>
                <Dropdown key="fiability" title="Fiabilité" classeTitre="dropdown-title" classeText="dropdown-text-about" classe="about-div-dropdown" fontTitre="title-about" description={fiability} />
                <Dropdown key="respect" title="Respect" classeTitre="dropdown-title" classeText="dropdown-text-about" classe="about-div-dropdown" fontTitre="title-about"  description={respect}/>
                <Dropdown key="service" title="Service" classeTitre="dropdown-title" classeText="dropdown-text-about" classe="about-div-dropdown" fontTitre="title-about"  description={service}/>
                <Dropdown key="security" title="Sécurité" classeTitre="dropdown-title" classeText="dropdown-text-about" classe="about-div-dropdown" fontTitre="title-about" description={security}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About
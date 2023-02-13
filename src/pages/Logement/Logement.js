// import image from "../../assets/interieur_Kasa.png"
import DropdownHost from '../../components/Dropdown/DropdownHost'
import Carousel from '../../components/Carousel/Carousel'
import './Logement.css'
import Tags from "../../components/Tags/Tags"
import Stars from "../../components/Stars/Stars"
import listeLogements from '../../data/logement_data.json'
import { useParams } from "react-router-dom"

function Logement() {
    const { id } = useParams()
    const logements = listeLogements
    console.log(id)

    const element = logements.find(el => el.id === id)
    console.log(element.title)
    const equipements = element.equipments
console.log(equipements)

    return(
        <div>
            <section className='fiche-logement'>
                <Carousel cover={element.cover} pictures={element.pictures}/>
                {/* <div className='img-container'>
                    <img src={element.cover} alt='description visuelle du logement' className='carousel'/>
                </div> */}
                <div className='description-container'>
                    <div className='title-and-tags'>
                        <div className='title'>
                            <h1 className='title-name'>{element.title}</h1>
                            <h2 className='title-direction'>{element.location}</h2>
                        </div>
                        <Tags tags={element.tags}/>
                    </div>
                    <div className='name-and-note'> 
                        <div className='host'>
                            <div className='host-name'><p>{element.host.name}</p></div>
                            <div className='host-picture'><img src={element.host.picture} alt='host' className="img-host"/></div>
                        </div>
                        <Stars rate={element.rating}/>
                    </div>
                </div>
                <DropdownHost description={element.description} equipments={element.equipments}/>
            </section>
        </div>
    )
}

export default Logement
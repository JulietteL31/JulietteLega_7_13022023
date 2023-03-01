// import image from "../../assets/interieur_Kasa.png"
import DropdownHost from '../../components/Dropdown/Dropdown'
import Carousel from '../../components/Carousel/Carousel'
import './Logement.css'
import Tags from "../../components/Tags/Tags"
import Stars from "../../components/Stars/Stars"
import listeLogements from '../../data/logement_data.json'
import { useParams } from "react-router-dom"
import {  useState, useEffect } from "react"
import  Error from '../Error/Error'


function Logement() {

    const [logement, setLogement] = useState({
        tags: [],
        equipments:[],
        pictures: [],
        description: '',
        rating: "",
        host: {
            name: "",
            picture: ""
        }
    });
    
    const { id } = useParams()

    useEffect(() => {
            listeLogements.map((house) => {
            if(house.id === id) {
                setLogement(house)
            }
        })
    }, [id]);
  

    if(logement.title === undefined){{
       return <Error />
    }}
 

    console.log(logement)

    const logementEquipement = logement.equipments;


    let mapLogementEquipement = logementEquipement.map((l, index) => (
        <p className="dropdown-ul" key={l}>{logement.equipments[index]}</p>
    ))

    let affichageDescription = <p className='text'> {logement.description} </p>

    return (
        <div>
        <section className='fiche-logement'>
            <Carousel cover={logement.cover} pictures={logement.pictures}/>
            <div className='description-container'>
                        <div className='title-and-tags'>
                            <div className='title'>
                                <h1 className='title-name'>{logement.title}</h1>
                                <h2 className='title-direction'>{logement.location}</h2>
                            </div>
                            <Tags tags={logement.tags}/>
                        </div>
                        <div className='name-and-note'> 
                            <div className='host'>
                                <div className='host-name'><p>{logement.host.name}</p></div>
                                <div className='host-picture'><img src={logement.host.picture} alt='host' className="img-host"/></div>
                            </div>
                            <Stars rate={logement.rating}/>
                            </div>
                    </div>
                    <div className='dropdown-container'>
                        <DropdownHost title="Description" description={affichageDescription} classeTitre="dropdown-titre" classeText="dropdown-text" classe="dropdown" fontTitre="title-drop"/>
                        <DropdownHost title="Equipements" description={mapLogementEquipement} classeTitre="dropdown-titre" classeText="dropdown-text" classe="dropdown" fontTitre="title-drop"/>
                    </div>
                </section>
            </div>

    )

    
    /*
    const { id } = useParams()
    const logements = listeLogements
    console.log(id)

    const element = logements.find(el => el.id === id)
    console.log(element.title)
    const equipements = element.equipments

    const equipementsMapper = <ul className='dropdown-ul'> {equipements.map((equipement) =>
    <li key={equipement}>{equipement}</li>
    )}</ul>;
    
console.log(equipements)
const description = <p className='text'>{element.description}</p>

    if(logements.find(el => el.id === id)) {
        return(
            <div>
                <section className='fiche-logement'>
                    <Carousel cover={element.cover} pictures={element.pictures}/>
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
                    <div className='dropdown-container'>
                        <DropdownHost title="Description" description={description} classeTitre="dropdown-titre" classeText="dropdown-text" classe="dropdown" fontTitre="title-drop"/>
                        <DropdownHost title="Equipements" description={equipementsMapper} classeTitre="dropdown-titre" classeText="dropdown-text" classe="dropdown" fontTitre="title-drop"/>
                    </div>
                </section>
            </div>
        )
    } else {
        return (redirect('/404'))
    }
    */
}

export default Logement
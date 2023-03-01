import DropdownHost from '../../components/Dropdown/Dropdown'
import Carousel from '../../components/Carousel/Carousel'
import './Logement.css'
import Tags from "../../components/Tags/Tags"
import Stars from "../../components/Stars/Stars"
import listeLogements from '../../data/logement_data.json'
import { useParams } from "react-router-dom"
import {  useState, useEffect } from "react"
import Error from '../Error/Error'


function Logement() {

//Mise en place du useState pour récupérer les infos du logement
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

//Récup id logement cliqué avec useParams
    const { id } = useParams()

//Récup et affichage des infos relatives au logement dans la liste de datas en fonction de l'id avec useEffect
    useEffect(() => {
            listeLogements.map((house) => {
            if(house.id === id) {
                setLogement(house)
            }
        })
    }, [id]);
  
//Gestion des erreurs: si le logement n'existe pas => page 404
    if(logement.title === undefined){
        return <Error /> }


//Affichage description et équipements dans balises adaptées
    const logementEquipement = logement.equipments;

    let mapLogementEquipement = logementEquipement.map((l, index) => (
        <p className="dropdown-ul" key={l}>{logement.equipments[index]}</p>
    ))

    let affichageDescription = <p className='text'> {logement.description} </p>

//Affichage infos page logement
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
}

export default Logement
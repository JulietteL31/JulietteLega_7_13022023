import flecheGauche from '../../assets/fleche-gauche.png'
import flecheDroite from '../../assets/fleche-droite.png'
import './Carousel.css'
import { useState } from "react"

function Carousel({pictures}) {

    const imgCount = pictures.length
    const [index, setIndex] = useState(0)
    const imgNumber = index + 1

//fonction pour afficher l'image suivante
    const goToNext = () => {
        const lastImage = imgNumber === imgCount ? 0 : index + 1;
        setIndex(lastImage);
    }

//fonction pour afficher l'image précédente
    const goToPrevious = () => {
        const firstImage = imgNumber === 1 ? imgCount - 1 : index - 1;
        setIndex(firstImage);
    }

//Cas où il y a 1 seule image
    if(imgCount < 2) {
        return <div className='img-container-carousel'>
        <img src={pictures[index]} alt='description visuelle du logement' className='img-carousel'/>
        </div>
    }

//Affichage
    return(

        
        <div className='img-container-carousel'>
                    <img src={pictures[index]} alt='description visuelle du logement' className='img-carousel'/>
                    <div className='numero-img'><p>{imgNumber}/{imgCount}</p></div>
                    <div className='fleche-droite'><img src={flecheDroite} alt='fleche direction droite' onClick={goToNext} className='fleche-carousel'/></div>
                    <div className='fleche-gauche'><img src={flecheGauche} alt='fleche direction gauche' onClick={goToPrevious} className='fleche-carousel'/></div>

        </div>


    )
}

export default Carousel
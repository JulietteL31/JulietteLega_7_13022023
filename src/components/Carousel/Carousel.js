import flecheGauche from '../../assets/fleche-gauche.png'
import flecheDroite from '../../assets/fleche-droite.png'
import './Carousel.css'
// import "react-image-gallery/styles/css/image-gallery.css"

import { useState } from "react"

// import ImageGallery from 'react-image-gallery'

function Carousel({cover, pictures}) {

    const imgCount = pictures.length
    const [index, setIndex] = useState(0)
    const imgNumber = index + 1

    const goToNext = () => {
        const lastImage = imgNumber === imgCount ? 0 : index + 1;
        setIndex(lastImage);
    }

    const goToPrevious = () => {
        const firstImage = imgNumber === 1 ? imgCount - 1 : index - 1;
        setIndex(firstImage);
    }

    
    
        console.log(imgNumber)

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
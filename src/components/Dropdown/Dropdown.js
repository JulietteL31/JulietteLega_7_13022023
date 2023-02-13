import { useState } from 'react'
import flecheHaut from '../../assets/fleche-haut.png'
import flecheBas from '../../assets/fleche-bas.png'
import './Dropdown.css'

function Dropdown() {
    const [isOpenFiabilite, setIsOpenFiabilite] = useState(true)
    const [isOpenRespect, setIsOpenRespect] = useState(true)
    const [isOpenService, setIsOpenService] = useState(true)
    const [isOpenSecurity, setIsOpenSecurity] = useState(true)
    return (
        <div className='dropdown-container'>
            {isOpenFiabilite ? (
                <div className='dropdown'>
                    <div className='dropdown-title' onClick={() => setIsOpenFiabilite(false)}>
                        <h2 className='title'>Fiabilité</h2>
                        <img src={flecheBas} alt="fleche" className='fleche'/>
                    </div>
                </div>
            ) : (
                <div className='dropdown'>
                    <div className='dropdown-title' onClick={() => setIsOpenFiabilite(true)}>
                        <h2 className='title'>Fiabilité</h2>
                        <img src={flecheHaut} alt="fleche" className='fleche'/>
                    </div>
                    <div className='dropdown-text'>
                        <p className='text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </div>
            )}
            {isOpenRespect ? (
                <div className='dropdown'>
                 <div className='dropdown-title' onClick={() => setIsOpenRespect(false)}>
                    <h2 className='title'>Respect</h2>
                    <img src={flecheBas} alt="fleche" className='fleche'/>
                </div>
            </div>
            ) : (
                <div className='dropdown'>
                <div className='dropdown-title' onClick={() => setIsOpenRespect(true)}>
                    <h2 className='title'>Respect</h2>
                    <img src={flecheHaut} alt="fleche" className='fleche'/>
               </div>
               <div className='dropdown-text'>
                    <p className='text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
             </div>
            </div>
            )}
            {isOpenService ? (
                <div className='dropdown'>
                 <div className='dropdown-title' onClick={() => setIsOpenService(false)}>
                     <h2 className='title'>Service</h2>
                     <img src={flecheBas} alt="fleche" className='fleche'/>
                 </div>
           </div>
            ) : (
<div className='dropdown'>
                 <div className='dropdown-title' onClick={() => setIsOpenService(true)}>
                     <h2 className='title'>Service</h2>
                     <img src={flecheHaut} alt="fleche" className='fleche'/>
                 </div>
                 <div className='dropdown-text'>
                     <p className='text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                 </div>
             </div>
            )}
            {isOpenSecurity ? (
                <div className='dropdown'>
                             <div className='dropdown-title' onClick={() => setIsOpenSecurity(false)}>
                                 <h2 className='title'>Sécurité</h2>
                                 <img src={flecheBas} alt="fleche" className='fleche'/>
                             </div>
                         </div>
            ) : (
                <div className='dropdown'>
                 <div className='dropdown-title' onClick={() => setIsOpenSecurity(true)}>
                     <h2 className='title'>Sécurité</h2>
                     <img src={flecheHaut} alt="fleche" className='fleche'/>
                 </div>
                 <div className='dropdown-text'>
                     <p className='text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                 </div>
             </div>
            )}
        </div>
    )
    
    
    
}

export default Dropdown
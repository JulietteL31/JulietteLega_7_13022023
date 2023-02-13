import { useState } from "react"
import './DropdownHost.css'
import flecheHaut from '../../assets/fleche-haut.png'
import flecheBas from '../../assets/fleche-bas.png'

function DropdownHost({description, equipments}) {
    const [isOpenEquipments, setIsOpenEquipments] = useState(true)
    const [isOpenDescription, setIsOpenDescription] = useState(true)
    return(
        <div className='equipement-container'>

            {isOpenDescription ? (
                <div className='equipement'>
                <div className='equipement-titre' onClick={() => setIsOpenDescription(false)}>
                    <h3>Description</h3>
                    <img src={flecheBas} alt='fleche' className='equipement-fleche'/>
                </div>
            </div>
            ) : (
                <div className='equipement'>
                        <div className='equipement-titre' onClick={() => setIsOpenDescription(true)}>
                            <h3>Description</h3>
                            <img src={flecheHaut} alt='fleche' className='equipement-fleche'/>
                        </div>
                        <div className='equipement-text'><p>{description}</p></div>
                    </div>
            )}

            {isOpenEquipments ? (
                <div className='equipement'>
                <div className='equipement-titre' onClick={() => setIsOpenEquipments(false)}>
                    <h3>Equipements</h3>
                    <img src={flecheBas} alt='fleche' className='equipement-fleche'/>
                </div>
            </div>
            ) : (
                <div className='equipement'>
                        <div className='equipement-titre' onClick={() => setIsOpenEquipments(true)}>
                            <h3>Equipements</h3>
                            <img src={flecheHaut} alt='fleche' className='equipement-fleche'/>
                        </div>
                        <div className='equipement-text'><ul>
                            {equipments.map((equipement) =>
                                <li key={equipement}>{equipement}</li>)}
                            </ul></div>
                    </div>
            )}  

        </div>
    )
}

export default DropdownHost
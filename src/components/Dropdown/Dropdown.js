import { useState } from "react"
import './Dropdown.css'
import flecheHaut from '../../assets/fleche-haut.png'
import flecheBas from '../../assets/fleche-bas.png'

function Dropdown({description, title, classeTitre, classe, classeText, fontTitre}) {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            {isOpen ? (
                <div className={classe}>
                    <div className={`${classeTitre} effect-rotate-ferme`} onClick={() => setIsOpen(false)}>
                        <h3 className={fontTitre}>{title}</h3>
                        <img src={flecheHaut} alt='fleche' className='dropdown-fleche rotation'/>
                    </div>
                    <div className={classeText}>{description}</div>
                </div>
            
            ) : (
                <div className={classe}>
                    <div className={`${classeTitre} effect-rotate-ouvre`} onClick={() => setIsOpen(true)}>
                        <h3 className={fontTitre}>{title}</h3>
                        <img src={flecheBas} alt='fleche' className='dropdown-fleche rotation-fleche'/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Dropdown
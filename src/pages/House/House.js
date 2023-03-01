import maskGroup from '../../assets/Partout_Kasa.png'
import Item from '../../components/Item/Item'
import listeLogements from "../../data/logement_data.json"
import './House.css'

function House() {
    return (
        <div className='body'>
            <div className='section1-content'>
                <h1 className='section1-title'>Chez vous, partout et ailleurs</h1>
                <img src={maskGroup} className='mask-content' alt='fond' />
            </div>
            <div className='logementsContent'>
                <div className='listeLogements'>
                    {listeLogements.map((l) => 
                    <Item key={l.id} id={l.id} title={l.title} cover={l.cover} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default House
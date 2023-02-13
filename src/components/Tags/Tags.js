// import Logements from '../../data/logement_data.json'
import './Tags.css'

function Tag({tags}) {
    console.log(tags)
    return(
        <div className='tags'>
            {tags.map((tag) =>
            <div className='tag' key={tag}><p className='tag-text' key={tag}>{tag}</p></div>
            )}
        </div>
    )
}

export default Tag
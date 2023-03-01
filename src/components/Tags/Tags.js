import './Tags.css'

function Tag({tags}) {
    return(
        <div className='tags'>
            {tags.map((tag) =>
            <div className='tag' key={tag}><p className='tag-text' key={tag}>{tag}</p></div>
            )}
        </div>
    )
}

export default Tag
import etoile from '../../assets/Star.png'
import etoileGrise from '../../assets/StarEmpty.png'
import './Stars.css'

function Stars({rate}) {

    const range = [1, 2, 3, 4, 5]

    return(
        <div className='stars'>

            {range.map((rangeElem) =>
				rate >= rangeElem ? (
					<div key={rangeElem.toString()}><img src={etoile} className='etoile' alt='etoile' /></div>
				) : (<div key={rangeElem.toString()}><img src={etoileGrise} className='etoile' alt='etoile' /></div>)
			)}

            {/* <div><img src={etoile} className='etoile' alt='etoile' /></div>
            <div><img src={etoile} className='etoile' alt='etoile' /></div>
            <div><img src={etoile} className='etoile' alt='etoile' /></div>
            <div><img src={etoile} className='etoile' alt='etoile' /></div>
            <div><img src={etoile} className='etoile' alt='etoile' /></div> */}
        </div>
    )
}

export default Stars
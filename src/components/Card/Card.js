import React from 'react'
import "./styles.css"

const Card = ({image}) => {
    return ( 
        <div className="card">
            <img src={image} alt={image} />
            <div>
                <p>This is the card component</p>
            </div>
        </div>
     );
}
 
export default Card;
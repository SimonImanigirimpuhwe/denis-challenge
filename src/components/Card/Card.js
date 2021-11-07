import React from 'react'
import { Button } from '../Button';
import "./styles.css"

const Card = ({image, title, spanText, tp, pt, cyl}) => {
    return ( 
        <div className="card">
            <img src={image} alt={image} />
            <div className="content">
                <p><strong>{title}</strong><span>{spanText}</span></p> 
                <div className="cardBody">
                    <ul>
                        <li>Tipo: <span>{tp}</span></li>
                        <li>Potenza: <span>{pt}</span></li>
                        {cyl && <li>Cilindrate: <span>{cyl}</span></li>}
                    </ul>
                    <Button title={btnTitle}/>
                </div>
            </div>
        </div>
     );
}
 
export default Card;
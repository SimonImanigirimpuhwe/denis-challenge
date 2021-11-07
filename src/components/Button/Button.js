import React from 'react';
import "./styles.css";


const Button = ({color, handleClick, title}) => {
    return ( 
        <button className="btn" onClick={handleClick} style={{borderColor: color, color}}>
            {title}
        </button>
     );
}
 
export default Button;

Button.defaultProps = {
    title: "GPL",
    color: "#005999",
    handleClick: (e) => e.preventDefault()
}
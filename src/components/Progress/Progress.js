import React from 'react';
import "./styles.css";


const Progress = ({color}) => {
    return ( 
        <div className="progress" style={{backgroundColor: color}} />
     );
}
 
export default Progress;

Progress.defaultProps = {
    color: "#00000029"
}
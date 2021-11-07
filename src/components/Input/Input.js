import React from 'react'
import "./styles.css"

const Input = ({isChecked, type}) => {
    return ( 
        <React.Fragment>
            {type === "radio"? (
            <div className="radio">
                {isChecked && <div className="circle" />}
            </div> ): (
            <div className="checkbox" style={{backgroundColor: isChecked && "#FF5D27"}} />
            )}
        </React.Fragment>
     );
}
 
export default Input;

Input.defaultProps = {
    isChecked: false
}
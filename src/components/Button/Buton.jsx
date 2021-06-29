import React from 'react';
import './Buton.scss';


const STYLES = [
    "btn--auth",
    "btn--cta",
    "btn--outline",
    "btn--grad"
]

const SIZES = [
    "btn-medium",
    "btn-small"
]

export const Button = ({ children, buttonStyle,buttonSize, type }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

  return (
    
        <button type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </button>
    
  );
};

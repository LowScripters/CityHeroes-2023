import React from 'react';
import './style.css'
export const Input = ({name,type,text,onChange,value}) => {
    return (
    <div className="InputContainer">
        <input type={type} name={name} className="Input" onChange={onChange} required />
        <label htmlFor={name} className="InputLabel" >{text}</label>
    </div>
    );
};
import React from 'react';
import { useState } from 'react';
import './style.css'
export const Button = ({text,onClick}) => {
    return (
        <button className="Button"onClick={onClick}>{text}</button>
    );
  };
  
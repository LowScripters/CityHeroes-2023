import React from 'react';
import { useState } from 'react';
import './style.css'
export const MenuButton = ({icon,onClick}) => {
    return (
        <button className="MenuButton" onClick={onClick}>
            <i className={icon} aria-hidden="true"></i>
        </button>
    );
  };
  
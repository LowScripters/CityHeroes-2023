import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const ListV3 = ({textS}) => {
    return(
        <div style={textS} className='NavList'>
            <h3>Заголовок</h3>
            <ul className='NavList__List'>
                <li><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>              
                <li><a href="#"> Officia perferendis dolorum vitae temporibus eos iure.</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>              
            </ul>
        </div>
    )
}

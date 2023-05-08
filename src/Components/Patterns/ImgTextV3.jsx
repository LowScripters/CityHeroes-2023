import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import './style.css';
import img from './img/imgTest.jpg'
import { Input } from '../Input/Input';
//   const html = renderToStaticMarkup(< Input/>);
export const TextImgV3 = ({textS}) => {
    return(
        <>
            <div className="ImageBlock">
                <div style={textS}>
                    <h2>Заголовок</h2>
                    <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <img src={img} alt="" />
            </div>
        </>
    )
}

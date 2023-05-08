import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import img from './img/imgTest.jpg'
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const CardV1 = ({color,divS,buttonS,texts}) => {

    return( 
        <>
            <div className="CardContainer"  style={texts}>
                <div className="CardContainer__item" style={divS}>
                    <img src={img} alt="" />
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
                <div className="CardContainer__item" style={divS}>
                    <img src={img} alt="" />
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
                <div className="CardContainer__item" style={divS}>
                    <img src={img} alt="" />
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
               
            </div>
        </>
    )
}

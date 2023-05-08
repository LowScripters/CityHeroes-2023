import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const CardV2 = ({color,divS,buttonS,texts}) => {
 
    return(
        <> 
            <div className="CardList" style={texts}>
                <div className="CardList__item" style={divS}>
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
                <div className="CardList__item" style={divS}>
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
                <div className="CardList__item" style={divS}>
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
                <div className="CardList__item" style={divS}>
                    <h3>Заголовок</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button style={buttonS} className='button'>Кнопка</button>
                </div>
            </div>
        </>
    )
}

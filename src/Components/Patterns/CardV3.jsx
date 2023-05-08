import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const CardV3 = ({color,divS,buttonS,texts}) => {

    return(
        <>  
            <div className="Cards" style={texts}>
                <div className="Cards__item"  style={divS}>
                    <h2>Загоовок</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button style={buttonS} className='Cards__item_button button'>Кнопка</button>
                </div>
                <div className="Cards__item" style={divS}>
                    <h2>Загоовок</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button style={buttonS} className='Cards__item_button button'>Кнопка</button>
                </div>
                <div className="Cards__item" style={divS}>
                    <h2>Загоовок</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button style={buttonS} className='Cards__item_button button'>Кнопка</button>
                </div>  
            </div>
        </>
    )
}

import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const ListV2 = ({textS}) => {
    return(
        <div style={textS} className='ListContainer'>
            <h3>Заголовок</h3>
            <ul style={textS} className='ListContainer__List'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                <ul style={textS} className='ListContainer__List'>                
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>   
                    <li>Voluptatem quos non nam natus doloribus commodi autem quo sint id quod porro hic minus ullam suscipit quasi nostrum enim, similique saepe.</li>
                </ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>   
                <li> Officia perferendis dolorum vitae temporibus eos iure maxime saepe dolorem praesentium provident nam pariatur repellendus, possimus, optio quia laudantium doloribus aliquam! Libero?</li>
            </ul>
        </div>
    )
}

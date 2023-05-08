import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import './style.css';
import img from './img/imgTest.jpg'
import { Input } from '../Input/Input';
//   const html = renderToStaticMarkup(< Input/>);
export const TextImgV2 = ({textS,DivS}) => {
    let style

    return(
        <>
            <div style={DivS} className="infoBlockWrapper">
                <div style={textS}>
                    <h2>Заголовок</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo quasi amet nesciunt velit veniam commodi itaque modi repudiandae aliquam, deserunt distinctio possimus ab facere iusto numquam porro sequi tenetur! 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat officiis eius sequi voluptate, accusantium nesciunt eligendi eum ad itaque culpa qui possimus dicta sed. Quis deserunt harum consectetur tempora.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis doloribus suscipit ex excepturi dolores dolorum nemo laudantium vitae libero iste inventore, rerum praesentium asperiores quod fugit illum corporis culpa.
                    </p>
                </div>
                <img src={img} alt="" />
            </div>
        </>
    )
}

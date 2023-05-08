import React, { useState } from 'react';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const TextV1 = ({textS}) => {

    return(
        <>
            <div style={textS} className="textContainer">
                <h2>Заголовок</h2>
                <br></br>
                <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa debitis sequi maxime?</p>
                <br></br>
                <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id vero quidem, explicabo quibusdam quaerat consequatur quam itaque molestias dignissimos sapiente odit incidunt cumque distinctio dolor nobis aut natus laboriosam?</p>
            </div>
        </>
    )
}

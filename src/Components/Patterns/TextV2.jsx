import React, { useState } from 'react';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const TextV2 = ({textS}) => {
    return(
        <>
            <div className="infoBlock">
                <h2>Заголовок</h2>
                <br></br>
                <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab aliquid exercitationem incidunt quo eos sit earum, amet velit. Illum animi reiciendis molestias vel veritatis incidunt! Facere suscipit nemo beatae.</p>
                <br></br>
                <h3>Заголовок</h3>
                <br></br>
                <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id vero quidem, explicabo quibusdam quaerat consequatur quam itaque molestias dignissimos sapiente odit incidunt cumque distinctio dolor nobis aut natus laboriosam?</p>
            </div>
        </>
    )
}

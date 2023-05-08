import React, { useState } from 'react';
import './style.css';
//   const html = renderToStaticMarkup(< Input/>);
export const TextV3 = ({textS}) => {
    return(
        <>
            <div className="infoContainer">
                
                <p style={textS}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo quasi amet nesciunt velit veniam commodi itaque modi repudiandae aliquam, deserunt distinctio possimus ab facere iusto numquam porro sequi tenetur! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat officiis eius sequi voluptate, accusantium nesciunt eligendi eum ad itaque culpa qui possimus dicta sed. Quis deserunt harum consectetur tempora.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis doloribus suscipit ex excepturi dolores dolorum nemo laudantium vitae libero iste inventore, rerum praesentium asperiores quod fugit illum corporis culpa.
                </p>
            </div>
        </>
    )
}

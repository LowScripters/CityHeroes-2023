import React from 'react';
import { useState } from 'react';
import './style.css'
export const Search = ({onChange}) => {

    return (
        <div className="SearchContainer">
            <div className="SearchInputContainer">
                <input type='text' name='Search' className="Input" onChange={onChange}  required />
                <label htmlFor='Search' className="InputLabel" >Найти мероприятие</label>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
       </div>
    );
  };
  
import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
// import './style.css';
import { CardV1 } from '../Patterns/CardV1';
import { CardV2 } from '../Patterns/CardV2';
import { CardV3 } from '../Patterns/CardV3';
import { TextV1 } from '../Patterns/TextV1';
import { TextV2 } from '../Patterns/TextV2';
import { TextV3 } from '../Patterns/TextV3';
import { ListV1 } from '../Patterns/ListV1';
import { ListV2 } from '../Patterns/ListV2';
import { ListV3 } from '../Patterns/ListV3';
import SliderCon  from '../Patterns/Slder';
import { TextImgV1 } from '../Patterns/ImgTextV1';
import { TextImgV2 } from '../Patterns/ImgTextV2';
import { TextImgV3 } from '../Patterns/ImgTextV3';



let resultCode ='';
export const ViewResultContainer = ({list,style}) => {
    console.log(style);
    console.log(list);
    return(
       <>

        {style && list.map((i,index)=>{
            if (i.value == 0) {
                let patternChoice = Math.floor(Math.random() * 3);
                if (patternChoice==0) {let html = renderToStaticMarkup(< TextV1/>); resultCode+=html; return <TextV1 key={Math.random()} textS={style.text}/>}
                else if (patternChoice==1) {let html = renderToStaticMarkup(< TextV2/>); resultCode+=html; return <TextV1 key={Math.random()} textS={style.text}/>}
                else {let html = renderToStaticMarkup(< TextV3/>); resultCode+=html; return <TextV1 key={Math.random()} textS={style.text}/>}
            } 
            else if (i.value == 1) {
                let patternChoice = Math.floor(Math.random() * 3);
                if (patternChoice==0) {let html = renderToStaticMarkup(< TextImgV1/>); resultCode+=html; return <TextImgV1 key={Math.random()} textS={style.text}/>}
                else if (patternChoice==1) {let html = renderToStaticMarkup(< TextImgV2/>); resultCode+=html; return <TextImgV2 key={Math.random()} textS={style.text} DivS={style.div}/>}
                else {let html = renderToStaticMarkup(< TextImgV3/>); resultCode+=html; return <TextImgV3 key={Math.random()} textS={style.text}/>}
            }
            else if (i.value == 2) {
                let patternChoice = Math.floor(Math.random() * 3);
                if (patternChoice==0) {let html = renderToStaticMarkup(< CardV1/>); resultCode+=html;  return <CardV1 key={Math.random()} divS={style.div} buttonS={style.button} texts={style.text}/>}
                else if (patternChoice==1) { let html = renderToStaticMarkup(< CardV2/>); resultCode+=html;return <CardV2 key={Math.random()} divS={style.div} buttonS={style.button} texts={style.text}/>}
                else { let html = renderToStaticMarkup(< CardV3/>); resultCode+=html;return <CardV3 key={Math.random()} divS={style.div} buttonS={style.button} texts={style.text}/>}
            }
            else if (i.value == 3) {
                return <div>{i.label}</div>
            }
            else if (i.value == 4) {
                return <SliderCon key={Math.random()}/>
            }
            else if (i.value == 5) {
                let patternChoice = Math.floor(Math.random() * 3);
                if (patternChoice==0) {return <ListV1 key={Math.random()} textS={style.text}/>}
                else if (patternChoice==1) {return <ListV2 key={Math.random()} textS={style.text}/>}
                else {return <ListV3 key={Math.random()} textS={style.text}/>}
            }
            console.clear()
            console.log(resultCode);
        })}
       </>
    )
}

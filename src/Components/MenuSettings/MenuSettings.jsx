import React, { useState } from 'react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import './style.css';
import { Input } from '../Input/Input';
import { MenuButton } from '../MenuButton/MenuButton';
let blockArray=[0];
const options = [
    { value: 0, label: 'Текст' },
    { value: 1, label: 'Текст с картинкой' },
    { value: 2, label: 'Карточка' },
    { value: 3, label: 'Шапка' },
    { value: 4, label: 'Слайдер' },
    { value: 5, label: 'Список' },
  ]
  let menuSettingsData =new Set();
//   const html = renderToStaticMarkup(< Input/>);
export const MenuSettings = ({response,isviewout,listOut}) => {
    const [numBlock,setnumBlock] = useState(1);
    const [inputs, setInputs] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    menuSettingsData.add(selectedOption);
    menuSettingsData.delete(null);
    // console.log(selectedOption);
    const blockRender =(button)=>{
        if (button == true) {
            blockArray.push(numBlock); 
            setnumBlock(numBlock+1); 
        } else {
            blockArray.pop();
            setnumBlock(numBlock-1); 
        }
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        // console.log(inputs);
      }

    //запрос
    const colorRequest =(color)=>{
        const data = new FormData();
        data.append("ClassRoot", "content");
        data.append("ClassName", "GPTGenerator");
        data.append("FunctionName", "GPTgenerateAll");
        data.append("color", color);
        fetch('http://25.22.91.223/sites/generator_db/api/',{method: 'POST', mode: 'cors',
            body: data,
        })
        .then(response => response.json())
        .then(data => response(data))
    }


    const viewResult=()=>{        
        menuSettingsData.add(inputs)
        isviewout(true);
        let choiceColor = Math.floor(Math.random() * 3);
        let listRender =  [...menuSettingsData];
        // console.log(choiceColor);
        colorRequest(inputs.color1)
        // if (choiceColor == 1) {
        //     colorRequest(inputs.color1)
        // } else if (choiceColor == 2) {
        //     colorRequest(inputs.color2)
        // }
        // else{
        //     colorRequest(inputs.color3)
        // }
        listOut(listRender)
    }
    return(
       <div className='MenuSettings'>
        <div className=""> <h2>Цветовая палитра</h2>
            <Input name='color1' type='color'  onChange={handleChange} value={inputs.color1 || ''}/>
            {/* <Input name='color2' type='color'  onChange={handleChange} value={inputs.color2 || ''}/>
            <Input name='color3' type='color'  onChange={handleChange} value={inputs.color3 || ''}/> */}
        </div>
            <div className="MenuSettings_block">
                <h2>Настройка блоков</h2>
                <div className="">
                    <p>Количестко блоков</p> 
                <div className="MenuSettings_block_count">
                    <MenuButton icon='fa fa-minus' onClick={()=>{blockRender(false)}}/>
                    <p>{numBlock}</p>
                    <MenuButton icon='fa fa-plus' onClick={()=>{blockRender(true)}}/>
                </div>
                    {blockArray.map((i)=>{
                        return(<div className="MenuSettings_block_item" key={i}>
                            <p>Блок {i+1}</p>
                            <Select 
                            onChange={setSelectedOption}
                            options={options} 
                            styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? '#aebfc7' : '#425f83',
                                borderBlockWidth : '3px',
                                borderLeftWidth : '3px',
                                borderRightWidth : '3px',
                            }),
                            }}
                            theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            colors: {
                                ...theme.colors,
                                primary25: '#aebfc7',
                                primary: '#aebfc7',
                            },
                            })} 
                            />
                            {/* {menuSettingsData.pop()} */}
                        </div> )
                    })}

                </div>
                <div>

                </div>
                <Button text="Сгенерировать" onClick={()=>{viewResult()}}/>
            </div>
        </div>
    )
}

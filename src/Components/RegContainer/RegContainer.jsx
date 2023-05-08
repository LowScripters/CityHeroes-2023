import React, { useState } from 'react';
import Modal from "../Modal/Modal.jsx";
import useModal from '../../Hooks/useModal.js';
import { Button } from '../Button';
import {Input} from '../Input/Input.jsx'
import { MenuButton } from '../MenuButton/MenuButton.jsx';

export const RegContainer = ({isLoginOutput,Array}) => {
    const {isShowing, toggle} = useModal();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        isLoginOutput(true);
        fetch('https://25.22.91.223/sites/post_api/api/', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: 'Test', pass: 'GooD'}),
          mode: "no-cors"})
        .then(response => response.json())
        .then(data => console.log(data))
        // localStorage.EveForStudent = JSON.stringify(inputs)
        // console.log(localStorage.EveForStudent);
      }    
    return (
        <div className=''>
            <Button text='Регистрация' onClick={toggle}/>
            {/* <Modal isShowing={isShowing} hide={toggle} text='Зарегистрироваться'> */} 
            <Modal isShowing={isShowing} hide={toggle} text='Зарегистрироваться' OnSubmit={handleSubmit}> 
            <div className="ModalContainer">
                <h2 className="ModalTitle">Регистрация</h2>
                <div className="ModalContent">
                    <Input name='Name' type='text' text='Имя' onChange={handleChange} value={inputs.name || ''}/>
                    <Input name='SurName' type='text' text='Фамилия' onChange={handleChange} value={inputs.surname || ''}/>
                    <Input name='Email' type='e-mail' text='Электронная почта' onChange={handleChange} value={inputs.email || ''}/>
                    <Input name='Password' type='password' text='Пароль' onChange={handleChange} value={inputs.password || ''}/>
            </div>
            </div>
            </Modal>
        </div>
    );
  };
  
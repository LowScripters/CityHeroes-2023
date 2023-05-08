import React, { useState } from 'react';
import Modal from "../Modal/Modal.jsx";
import useModal from '../../Hooks/useModal.js';
import { Button } from '../Button';
import {Input} from '../Input/Input.jsx'
import './style.css'
import { MenuButton } from '../MenuButton/MenuButton.jsx';
export const SignUpContainer = ({isLoginOutput}) => {
    const {isShowing, toggle} = useModal();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const SignUp = (event) => {
      event.preventDefault();
      let decode = JSON.parse(localStorage.EveForStudent)
      console.log(decode);
      console.log(inputs);
      if (inputs.Email == decode.Email && inputs.Password == decode.Password) {
        isLoginOutput(true);
        localStorage.EveForStuLog = true;
      }
    }
    return (
        <div className="SignUpContainer">
          <Button text='Войти' onClick={toggle}/>
          <Modal isShowing={isShowing} hide={toggle} text='Войти' OnSubmit={SignUp}>
          <div className="ModalContainer">
            <h2 className="ModalTitle">Вход</h2>
            <div className="ModalContent">
                <Input name='Email' type='e-mail' text='Электронная почта' onChange={handleChange} value={inputs.email || ''}/>
                <Input name='Password' type='password' text='Пароль' onChange={handleChange} value={inputs.password || ''}/>
         </div>
        </div>
          </Modal>
        </div>
    );
  };
  
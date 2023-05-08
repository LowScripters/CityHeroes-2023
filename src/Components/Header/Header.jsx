import React, { useState } from 'react';
import useModal from '../../Hooks/useModal.js';
// import logo from './img/Logo EFS.png'
import './style.css'
import { MenuButton } from '../MenuButton/MenuButton.jsx';
import { SignUpContainer } from '../SignUpContainer/SignUpContainer.jsx';
import { RegContainer } from '../RegContainer/RegContainer.jsx';
import SideMenu from '../SideMenu/SideMenu.jsx';
export const Header = ({ isLogin, isLoginOutput,onload}) => {
  // console.log(isLogin, isLoginOutput);
  const { isShowing, toggle } = useModal();
  //ЗАПРОСЫ ДЛЯ ЛИЧНОГО КАБИНЕТА
  let userInfo = JSON.parse(localStorage.EveForStudent)
  let RegEventsDecode
  if (localStorage.RegEvents != '[]') {
    RegEventsDecode = JSON.parse(localStorage.RegEvents) 
  }
  const SingOut = ()=>{
    localStorage.EveForStuLog = 'false'
    isLoginOutput(false);
    toggle()
  }
  return (
    <div className="Header" onLoad={onload}>
      <div className="Logo">
        {/* <img src={logo} /> */}
      </div>
      {!isLogin && (<div className="LogInContaner">
          <SignUpContainer isLoginOutput={isLoginOutput}/>
          <RegContainer isLoginOutput={isLoginOutput}/>
        </div>
        )}
      {isLogin && (<MenuButton icon='fa fa-user' onClick={toggle}/>)}
      <SideMenu isShowing={isShowing} hide={toggle} 
      userData={userInfo} 
      Events={RegEventsDecode} 
      Title='Вы записались на эти события' 
      Personal={true} 
      onClick={()=>{SingOut()}}/>
    </div>
  );
};

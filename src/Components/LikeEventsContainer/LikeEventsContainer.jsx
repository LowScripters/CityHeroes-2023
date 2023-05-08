import React, { useState } from 'react';
import useModal from '../../Hooks/useModal.js';
import { MenuButton } from '../MenuButton/MenuButton.jsx';
import SideMenu from '../SideMenu/SideMenu.jsx';
export const LikeEventsContainer = () => {
  const { isShowing, toggle } = useModal();

  let LikeEventsDecode
  if (localStorage.LikeEvents != '[]') {
    LikeEventsDecode = JSON.parse(localStorage.LikeEvents) 
    // console.log(LikeEventsDecode);
  }
  return (
    <div>
        <MenuButton icon='fa fa-heart' onClick={toggle}/>
        <SideMenu isShowing={isShowing} hide={toggle}  Events={LikeEventsDecode} Title='Вам понравились эти события' Personal={true}/>
    </div>
  );
};

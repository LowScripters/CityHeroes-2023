import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { MenuButton } from '../MenuButton/MenuButton';
import './style.css'
const removeEvent=(Events,index,Check)=>{
  Events.splice(index,1)
  console.log(Events,index);
  if (Check) {
    localStorage.RegEvents = JSON.stringify(Events)
    console.log(localStorage.RegEvents);
  } else{
    localStorage.LikeEvents = JSON.stringify(Events)
    console.log(localStorage.LikeEvents);
  }
}
const SideMenu = ({ isShowing, hide, userData, Events, Title, Personal,onClick}) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="SideMenuWrapper">
      <div className="SideMenuContent">
        <button type="button" className="SideMenuCross" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
        </button>
        {userData &&(
          <div className="SideMenuUserInfo">
          <div className="SideMenuUserInfoName">{userData.Name + ' '+ userData.SurName}</div>
          <div className="SideMenuUserInfoEmail">{userData.Email}</div>
        </div>
        )}
          {Events && (
        <div className="SideMenuEvent">
          <h3>{Title}</h3>
          <div className='RegEventList'>
          {Events && Personal &&(
            Events.map((Event,index)=>{
            return( 
            <div className="RegEvent" key={Event.name}>
              <div className="EventName">{Event.name}</div>
              <div className="EventСategory">{Event.category}</div>
              <div className="EventLocation">{Event.location}</div>
              <div className="EventDescribe">{Event.describe}</div>
              <div className="EventCompany">{Event.company}</div>
              <div className="EventData">{Event.data}</div>
              <MenuButton icon='fa fa-trash' onClick={()=>{removeEvent(Events,index,userData)}}/>
            </div>)
            }))}
            {Events&& !Personal && (
              Events.map((Event)=>{
              console.log(Event.like)
            return( 
            <div className="RegEvent" key={Event.name}>
              <div className="EventName">{Event.name}</div>
              <div className="EventСategory">{Event.category}</div>
              <div className="EventLocation">{Event.location}</div>
              <div className="EventDescribe">{Event.describe}</div>
              <div className="EventCompany">{Event.company}</div>
              <div className="EventData">{Event.data}</div>
              <div className="EventData">Записалось на событие {Event.count}</div>
              <div className="EventData">Добавило в избранное {Event.like}</div>
            </div>)
            }))}
          </div>
        </div>)}
        {!Events && (
          <div className="SideMenuEvent">
            <h3>Вы не добавили ни одного события сюда</h3>
          </div>
        )}
        {userData &&(
        <MenuButton icon='fa fa-sign-out' onClick={onClick}/>
        )}
      </div>
    </div> 
  </>, document.body
) : null;

export default SideMenu;
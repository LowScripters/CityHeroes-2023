import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './Components';
import { MenuSettings } from './Components/MenuSettings/MenuSettings';
import { ViewResultContainer } from './Components/ViewResultContainer/ViewResultContainer';
import useModal from './Hooks/useModal.js';
const App = () => {
  const {isShowing, toggle} = useModal();
  const [LogIn,setLogIn] = useState(true);
  const [view,setview] = useState(false);
  const [list,setlist] = useState();
  const [response,setresponse] = useState();
  const CheckLogIn =()=>{
    if ( localStorage.EveForStuLog == 'false') {
      setLogIn(false)
      localStorage.EveForStuLog = LogIn
    } else{
      setLogIn(true)
    }
  }
  return (
    <div className="MainWrapper">
      { !view &&(
      <div className="MainContainer">
      <Header isLogin={LogIn} isLoginOutput={setLogIn} onload={CheckLogIn}/>
        <MenuSettings response={setresponse} isviewout={setview} listOut={setlist}/> 
        </div>
          )}
      {view && (
        <ViewResultContainer list={list} style={response}/>   
        )}
    </div>
  );
};

export default App;
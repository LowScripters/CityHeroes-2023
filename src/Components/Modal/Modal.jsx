import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import './style.css'

const Modal = ({ isShowing, hide,children,OnSubmit,text }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" onClick={hide}/>
    <div className="ModalWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="ModalContainer">
        <div className="modal-header">
          <button type="button" className="ModalCross" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={OnSubmit}>
        {children}
        {/* <Button text={text} onClick={hide}/> */}
        <button className='Button' type="submit">{text}</button>
       </form>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;
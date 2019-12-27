import React from 'react';
import style from './Overlay.module.scss'

const Overlay = (props) => { 
  const { isOpen, onClose } = props;


  return (
    <div onClick={onClose} className={`${style.overlay} ${isOpen ? style.open : ''}`} ></div>
    )
  }
  
export default Overlay;
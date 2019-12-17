import React from 'react';
import style from './Overlay.module.scss'

const Overlay = (props) => { 
  const { isOpen } = props;


  return (
    <div className={`${style.overlay} ${isOpen ? style.open : ''}`} ></div>
    )
  }
  
export default Overlay;
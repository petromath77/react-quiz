import React from 'react';
import style from './MenuToggle.module.scss';
import MenuList from '../MenuList/MenuList';


const MenuToggle = (props) => {
  const { isActive, clickToggle, onClose } = props;
  return (
    <div className={`${style.menu} ${isActive ? style.open : ''}`}>
      <i onClick={clickToggle} className={`${style.trigger} fa ${isActive ? `fa-times` : 'fa-bars'}`} />
      <MenuList isActive={isActive} onClose={ onClose }/> 
    </div>
  )
}

export default MenuToggle;
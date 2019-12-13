import React from 'react';
import style from './MenuToggle.module.scss'

const MenuToggle = (props) => {
  const { isActive, clickToggle } = props;
  return (
    <div className={`${style.menu} ${isActive ? style.open : ''}`}>
      <i onClick={clickToggle} className={`${style.trigger} fa ${isActive ? `fa-times` : 'fa-bars'}`} />
    </div>
  )
}

export default MenuToggle;
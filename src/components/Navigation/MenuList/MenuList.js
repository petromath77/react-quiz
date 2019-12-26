import React from 'react';
import style from './MenuList.module.scss'
import { NavLink } from 'react-router-dom';
// import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  {
    name: "List",
    to: "/list"
  },

  {
    name: "Auth",
    to: "/auth"
  },

  {
    name: "Create",
    to: "/quiz-creator"
  }
];

const renderLinks = () => { 
  return links.map((link, index) => { 
    return (
      <li className={style.item} key={index}>
        <NavLink to={link.to} className={style.link}>{link.name}</NavLink>
      </li>
    )
  });
};

const MenuList = (props) => {
  // const { isActive, onClose } = props;
  return (
    <>
    <ul className={style.list}>
      {renderLinks()}
    </ul>
      {/* {isActive ? <Backdrop onClick={onClose} /> : null} */}
    </>
  )
}

export default MenuList;
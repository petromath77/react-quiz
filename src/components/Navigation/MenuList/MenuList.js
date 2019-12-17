import React from 'react';
import style from './MenuList.module.scss'

const links = [
  1, 2, 3
];

const renderLinks = () => { 
  return links.map((link, index) => { 
    return (
      <li className={style.item} key={index}>Link {link}</li>
    )
  });
};

const MenuList = () => {
  return (
    <ul className={style.list}>
      {renderLinks()}
    </ul>
  )
}

export default MenuList;
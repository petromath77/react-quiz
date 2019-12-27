import React from 'react';
import style from './QuizList.module.scss'
import { NavLink } from 'react-router-dom';


const QuizList = (props) => {

  const renderQuizes = (param) => { 

    return [1, 2, 3].map((quiz, index) => {
      const ind = index + 1;
      return (
        <li className={style.item} key={index}>
          <NavLink className={style.link} onClick={param} to={"/quiz/" + ind }>Test {quiz}</NavLink>
        </li>
      );
     });
  };


  return (
    <div className={style.list}>
      <div className={style.wrapper}>
        <h1>Test List:</h1>
        <ul>
          {renderQuizes()}
        </ul>
      </div>
    </div>
  );
}

export default QuizList;
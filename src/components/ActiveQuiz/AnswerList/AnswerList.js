import React from 'react';
import AnswerItem from '../AnswerList/AnswerItem/AnswerItem';
import style from '../AnswerList/AnswerList.module.scss'

const AnswerList = props => (
  <ul className={style.list}>
    {props.answers.map((answer, index) => { 
      return (
        <AnswerItem onClickItem= {props.clickItem} key={index} answer={answer}/>
      )
    })}
  </ul>
);

export default AnswerList;
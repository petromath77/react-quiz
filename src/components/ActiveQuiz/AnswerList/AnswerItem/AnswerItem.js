import React from 'react';
import style from './AnswerItem.module.scss';

const AnswerItem = props => (
  <li onClick={() => props.onClickItem(props.answer.id)} className={style.item}>{props.answer.text}</li>
);

export default AnswerItem;
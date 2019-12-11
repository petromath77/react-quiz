import React from 'react';
import style from './AnswerItem.module.scss';

const AnswerItem = props => {

  const cls = [style.item];

  if (props.state) { 
    cls.push(style[props.state])
  }

  return (
    <li onClick={() => props.onClickItem(props.answer.id)}
      className={cls.join(' ')}>{props.answer.text}
    </li>
  );
};

export default AnswerItem;
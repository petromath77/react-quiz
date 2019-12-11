import React from 'react';
import AnswerItem from '../AnswerList/AnswerItem/AnswerItem';
import style from '../AnswerList/AnswerList.module.scss'

const AnswerList = props => {

  const cls = [style.list];

  if (props.visible) { 
    cls.push(style[props.visible])
  }


  return (
    <ul className={cls.join(' ')}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            state={props.state ? props.state[answer.id] : null}
            onClickItem={props.clickItem}
            key={index}
            answer={answer}
          />
        )
      })}
    </ul>
  )
};

export default AnswerList;
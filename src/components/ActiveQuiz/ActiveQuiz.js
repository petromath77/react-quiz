import React from 'react';
import style from './ActiveQuiz.module.scss';
import AnswerList from '../ActiveQuiz/AnswerList/AnswerList';

const ActiveQuiz = props => (
  <div className={style.activeQuiz}>
    <div className={style.question}>
      <span>
        <strong>{props.answerNumber}. </strong>
        {props.question}
      </span>
      <span>{props.answerNumber} of {props.quizLength}</span>
    </div>
    <AnswerList
      state={props.state}
      clickItem={props.onAnswerClick}
      answers={props.answers}
      visible={props.visible ? props.visible : null}
    />
  </div>
);

export default ActiveQuiz;
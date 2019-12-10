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
    <AnswerList clickItem={props.onAnswerClick}answers={props.answers}/>
  </div>
);

export default ActiveQuiz;
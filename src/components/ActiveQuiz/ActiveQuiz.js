import React from 'react';
import style from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <div className={style.activeQuiz}>
    <div className={style.question}>
      <span>
        <strong>2.</strong>
        How are you doing?
      </span>
      <span>4 of 12</span>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
);

export default ActiveQuiz;
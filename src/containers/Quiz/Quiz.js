import React, { Component } from 'react'
import style from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    quiz: [

    ]
  }

  render() {
    return (
      <div className={style.quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz />
      </div>
    )
  }
}

export default Quiz;
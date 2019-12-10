import React, { Component } from 'react'
import style from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    questionNumber: 0,
    quiz: [
      {
        question: 'How are you doing?',
        rightAnswer: 2,
        questionId: 1,
        answers: [
          {text: "Good", id: 1},
          {text: "Not Bad", id: 2},
          {text: "Bad", id: 3},
          {text: "#%censored!", id: 4}
        ]
      },
      {
        question: 'What are you doing?',
        rightAnswer: 3,
        questionId: 2,
        answers: [
          {text: "Something", id: 1},
          {text: "Nothing", id: 2},
          {text: "@#%^^%^", id: 3},
          {text: "#%censored!", id: 4}
        ]
      }
    ]
  }

  onClickAnswer = (answerId) => { 
    if (this.state.questionNumber < this.state.quiz.length) {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      })
    }
    else { 
      console.log('!!!');
      this.setState({
        questionNumber: this.state.quiz.length
      })
    }

  }

  render() {
    return (
      <div className={style.quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz answerNumber={this.state.questionNumber + 1} quizLength={this.state.quiz.length} onAnswerClick={this.onClickAnswer} question={this.state.quiz[this.state.questionNumber].question} answers={this.state.quiz[this.state.questionNumber].answers} />
      </div>
    )
  }
}

export default Quiz;
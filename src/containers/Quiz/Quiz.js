import React, { Component } from 'react'
import style from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import IsFinished from '../../components/IsFinished/IsFinished'

class Quiz extends Component {
  state = {
    results: {},
    questionNumber: 0,
    answerState: null,
    visible: null,
    isFinished: false,
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
    if (this.state.answerState) { 
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') { 
        return
      }
    }

    const question = this.state.quiz[this.state.questionNumber];
    const results = this.state.results;

    if (question.rightAnswer === answerId) {
      if (!results[question.id]) { 
        results[question.id] = 'success'
      }
      
      this.setState({
        answerState: { [answerId]: 'success' },
        results
      });

      const timeOut = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished!');
          this.setState({
            visible: null,
            isFinished: true
          });
        } else {

          this.setState({
            questionNumber: this.state.questionNumber + 1,
            answerState: { [answerId]: null },
            visible: 'vis'
          })

          }
          window.clearTimeout(timeOut);
        }, 1000, this.timeOver());


    } else { 
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results

      });
    }
  }

  timeOver() { 
    console.log('wrtretr');
    this.setState({
      visible: 'hidden'
    });
  }

  isQuizFinished() { 
    return this.state.questionNumber + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={style.quiz}>
        <h1>Quiz</h1>

        {
          this.state.isFinished
            ? 
            <IsFinished
              quiz={this.state.quiz}
              results={this.state.results}
              quizLength={this.state.quiz.length}
            />
            :
            <ActiveQuiz
            answerNumber={this.state.questionNumber + 1}
            quizLength={this.state.quiz.length}
            onAnswerClick={this.onClickAnswer}
            question={this.state.quiz[this.state.questionNumber].question}
            answers={this.state.quiz[this.state.questionNumber].answers}
            state={this.state.answerState}
            visible={this.state.visible}
          />
      }
      </div>
    )
  }
}

export default Quiz;
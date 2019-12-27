import React, { Component } from 'react'
import style from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import IsFinished from '../../components/IsFinished/IsFinished'

class Quiz extends Component {
  state = {
    results: {},
    activeQuestion: 0,
    answerState: null,
    visible: null,
    isFinished: false,
    quiz: [
      {
        question: 'How are you doing?',
        rightAnswer: 2,
        id: 1,
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
        id: 2,
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

    const question = this.state.quiz[this.state.activeQuestion];
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
            activeQuestion: this.state.activeQuestion + 1,
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
      // console.log(this.state.questionNumber+1 + ':' + results[question.id])
    }
  }

  timeOver() { 
    console.log('wrtretr');
    this.setState({
      visible: 'hidden'
    });
  }

  isQuizFinished() { 
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onceMoreHandler = () => { 
    this.setState({
      results: {},
      activeQuestion: 0,
      answerState: null,
      visible: null,
      isFinished: false,
    })
  }

  componentDidMount() { 
    console.log("quiz-id:" + this.props.match.params.id);
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
              onceMore = {this.onceMoreHandler}
            />
            :
            <ActiveQuiz
            answerNumber={this.state.activeQuestion + 1}
            quizLength={this.state.quiz.length}
            onAnswerClick={this.onClickAnswer}
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            state={this.state.answerState}
            visible={this.state.visible}
          />
      }
      </div>
    )
  }
}

export default Quiz;
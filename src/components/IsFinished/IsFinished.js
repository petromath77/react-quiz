import React from 'react';
import style from './IsFinished.module.scss';

const IsFinished = props => { 
  return (
    <div className={style.finished}>
      <ul className={style.list}>
        {
          props.quiz.map((quizItem, index) => {

            const cls = [
              'fa',
              props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
              style[props.results[quizItem.id]]
            ]

            return (
              <li key={index}>
                {index + 1}. {quizItem.question}
                <i className={cls.join(' ')}/>
              </li>
            )
          })
        }
        {/* <li className={style.right}>
          1. Damn Right!
          <i className={"fa fa-check"} aria-hidden="true"></i>
        </li>
        <li className={style.false}>
          2. Looose!
          <i className={"fa fa-times"} aria-hidden="true"></i>
        </li> */}

      </ul>
      <p>Right: 4 from {props.quizLength}</p>
      <button className={style.button}>Once more</button>
    </div>
  )
}

export default IsFinished;
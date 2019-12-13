import React from 'react';
import style from './IsFinished.module.scss';
import Button from '../UI/Button/Button'

const IsFinished = props => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

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
              <li key={index} className={style.item}>
                {index + 1}. {quizItem.question}
                <i className={cls.join(' ')}/>
              </li>
            )
          })
        }
      </ul>
      <p>Right: {successCount} from {props.quizLength}</p>
        <Button
          text={'Once More'}
          onceMore={props.onceMore}
          type="success"
        />
        <Button
          text={'More Tests'}
          onceMore={props.onceMore}
          type="warning"
        />
    </div>
  )
}

export default IsFinished;
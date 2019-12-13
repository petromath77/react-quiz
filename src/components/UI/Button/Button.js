import React from 'react';
import style from './Button.module.scss'
import ClassNames from 'classnames'

const Button = (props) => { 
  const { text, onceMore, type } = props;

  const ClassName = ClassNames({
    [style.error]: type === 'error',
    [style.warning]: type === 'warning',
    [style.success]: type === 'success',
  })

  return (
    <button
      text={text}
      type={type}
      onClick={onceMore}
      className={`${style.button} ${ClassName}`}>{text}</button>
  )
}

export default Button;
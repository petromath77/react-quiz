import React from 'react';
import style from './Button.module.scss'
import ClassNames from 'classnames'

const Button = (props) => { 
  const { text, onceMore, type, disableButton } = props;

  const ClassName = ClassNames({
    [style.error]: type === 'error',
    [style.warning]: type === 'warning',
    [style.success]: type === 'success',
    [style.btn]: type === 'btn',
  })

  return (
    <button disabled = {disableButton}
      text={text}
      type={type}
      onClick={onceMore}
      className={`${style.button} ${ClassName}`}>{text}</button>
  )
}

export default Button;
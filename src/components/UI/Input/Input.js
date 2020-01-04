import React from 'react';
import style from './Input.module.scss';

const Input = (props) => {
  const { ref, label, forHtml, text, type, value, onChange} = props;

  const isValid = ({ valid, touched, shouldValidate }) => { 
    return !valid && touched && shouldValidate;
  }

  return (
    <div className={style.wrapper}>

      <label
        className={style.label}
        htmlFor={forHtml}>{label}:
      </label>

      <input ref={ref}
        id={forHtml}
        className={`${style.input} ${isValid ? '' : style.invalid}`}
        type={type}
        placeholder={text}
        value={value}
        onChange={onChange}
      />
      
        {isValid ? "" : <span className={style.span}>Input correct {label}</span>}
      
    </div>
  );
}

export default Input;
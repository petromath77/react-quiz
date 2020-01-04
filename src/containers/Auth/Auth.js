import React, { useState, useEffect } from 'react';
import style from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { useFormState } from 'react-use-form-state';

const Auth = ({ onSubmit }) => {

  const [emailError, setEmailError] = useState(false);

  const [formState, { password, email }] = useFormState(
    {},
    {
      withIds: true // enable automatic creation of id and htmlFor props
    }

  );

 
  const loginHandler = () => { 

  }

  const registHandler = () => { 

  }

  const validateEmail = address => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(address).toLowerCase());
  };



  const handleSubmit = e => {
    e.preventDefault();

    //console.log(validateEmail(formState.values['email']));

  if (formState.values['email'] === "" || !validateEmail(formState.values['email'])) {
      setEmailError(true);
      console.log(emailError);
    } else { 
      setEmailError(false);
      console.log(emailError);
    }
  };



  return (
    <div className={style.auth}>
      <h1 className={style.title}>Auth</h1>
      <form className={style.form} onSubmit={handleSubmit} noValidate>
        <Input type="text" label={"Login"}
          {...email({
            name: 'email',
            validate: value => {
              if (!validateEmail(value)) {
                setEmailError(true);
                // return 'E-mail address is invalid';
                console.log('!!!');
              } else { 
                setEmailError(false);
                // return '';
                console.log('dfgdfgd');
              }
            },
            validateOnBlur: true,
          })}
        />
        <div>
          {emailError && (
            <div className="error-message">
              <span>E-mail address is invalid</span>
            </div>
          )}
        </div>
        <Input type="text" label={"Password"} required minLength="8"
          {...password('password')}
        />
        <Button className={style.btn} text={'Sign In'} type="btn" />
        <Button onClick={registHandler} className={style.btn} text={'Sign Up'} type="warning"/>
      </form>
    </div>
  )
}

export default Auth;
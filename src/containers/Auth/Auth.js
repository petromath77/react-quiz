import React from 'react';
import style from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const Auth = () => {

  const loginHandler = () => { 

  }

  const registHandler = () => { 

  }

  const submitHandler = event => { 
    event.preventDefault();

  }

  return (
    <div className={style.auth}>
      <h1 className={style.title}>Auth</h1>
      <form onClick={submitHandler} className={style.form}>
        <Input type="text" label={"Login"} forHtml={"log"}/>
        <Input type="text" label={"Password"} forHtml={"pass"} isValid />
        <Button onClick={loginHandler} className={style.btn} text={'Sign In'} type="btn" />
        <Button onClick={registHandler} className={style.btn} text={'Sign Up'} type="warning"/>
      </form>
    </div>
  )
}

export default Auth;
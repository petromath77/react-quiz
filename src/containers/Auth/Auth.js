import React, { useState, useEffect } from 'react';
import style from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
// import Input from '../../components/UI/Input/Input';
import { useFormState } from 'react-use-form-state';

const Auth = ({ onSubmit }) => {

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const validateEmail = address => {
    // const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regExp.test(String(address).toLowerCase());
    if (address === "qwerty@mail.ru")
      return true;
  };

  const validatePass = pass => {
    if (pass.length >= 6)
      return true;
  };

  const [formState, { password, email }] = useFormState(null, {
    onBlur(e) {
      const mail = formState.values['email'];
      const pass = formState.values['password'];
        // accessing the inputs target that triggered the blur event
        //const { name, value, ...target } = e.target;
      if (mail && pass) {
        if (validateEmail(mail)) {
          setEmailError(false);
        } else { 
          setEmailError(true);
        }

        if (validatePass(pass)) {
          setPassError(false);
        } else { 
          setPassError(true);
        }
        console.log('!!!');

      } else { 
        setEmailError(true);
        setPassError(true);
        console.log('34234');
      }
      }
    });
    
  //   useFormState(
  //   {},
  //   {
  //     withIds: true // enable automatic creation of id and htmlFor props
  //   }

  // );

 
  const loginHandler = () => { 
    console.log('!!!');
    if (formState.values['email'] === "" && formState.values['password'] === "") {
      setEmailError(true);
      setPassError(true);
      } else { 
      setEmailError(false);
      setPassError(false);
    }
  }

  const registHandler = () => { 

  }


  const handleSubmit = e => {
    e.preventDefault();
    setDisableButton(true);

    console.log(formState.errors);

    // if (formState.values['email'] === "" && formState.values['password'] === "") {
    //   setEmailError(true);
    //   setPassError(true);
    //   } else { 
    //   setEmailError(false);
    //   setPassError(false);
    // }
  };

  return (
    <div className={style.auth}>
      <h1 className={style.title}>Auth</h1>
      <form className={style.form} onSubmit={handleSubmit} noValidate>
        <label
          className={style.label}>Email:
        </label>
        <input className={style.input} type="text"
          {...email('email')}
          // {...email({
          //   name: 'email',
          //   validate: value => {
          //     if (!validateEmail(value)) {
          //       setEmailError(true);
          //       if (!validatePass(value)) { 
          //         setDisableButton(false);
          //       }
          //       setDisableButton(false);
          //       return 'E-mail address is invalid';
          //     } else { 
          //       setEmailError(false);
          //       setDisableButton(true);
          //       return '';
          //     }
          //   },
          //   validateOnBlur: true,
          // })}
        />
        <div>
          {emailError && (
            <div className={style.error}>
              E-mail address is invalid!
            </div>
          )}
        </div>

        <label
          className={style.label}>Password:
        </label>
        <input className={style.input} type="text" required minLength="8"
          // {...password({
          //   name: 'password',
          //   validate: value => {
          //     if (!validatePass(value)) {
          //       setPassError(true);
          //       if (!validateEmail(value)) { 
          //         setDisableButton(false);
          //       }
          //       return 'Password is invalid';
          //     } else { 
          //       setPassError(false);
          //       setDisableButton(true);
          //       return '';
          //     }
          //   },
          //   validateOnBlur: true,
          // })}
          {...password('password')}
        />
        <div>
          {passError && (
            <div className={style.error}>
              Password is invalid!
            </div>
          )}
        </div>
        <Button disableButton={!disableButton} className={style.btn} onClick={loginHandler} text={'Sign In'} type="btn" />
        <Button disableButton={!disableButton} onClick={registHandler} className={style.btn} text={'Sign Up'} type="warning"/>
      </form>
    </div>
  )
}

export default Auth;
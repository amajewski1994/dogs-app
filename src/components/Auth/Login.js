import React from 'react'
import Button from '../../shared/Button'
import { useForm } from '../../hooks/form-hook'

const Login = ({ switchAuthForm }) => {

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const inputChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    let isValid = true
    if(!e.target.value.replace(/\s/g, '') || e.target.value.length <= 0) {
      isValid = false
    }
    inputHandler(id, value, isValid)
  }

  return (
    <form className='modal-form'>
        <div className='modal-form-email'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' onChange={inputChange} />
        </div>
        <div className='modal-form-password'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' onChange={inputChange} />
        </div>
        <div className='modal-form-button'>
          <Button disabled={!formState.isValid}>LOGIN</Button>
        </div>
        <p>Don't have account? Go to <span onClick={switchAuthForm}>registration</span></p>
    </form>
  )
}

export default Login
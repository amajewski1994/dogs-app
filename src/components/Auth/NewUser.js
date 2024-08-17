import React from 'react'
import Button from '../../shared/Button'
import ImageUpload from '../../shared/ImageUpload'
import { useForm } from '../../hooks/form-hook'

const NewUser = ({ switchAuthForm, isAdmin }) => {

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      surname: {
        value: '',
        isValid: false
      },
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      },
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
        <div className='modal-form-name'>
          <label htmlFor='name'>Name</label>
          <input id='name' onChange={inputChange} />
        </div>
        <div className='modal-form-surname'>
          <label htmlFor='surname'>Surname</label>
          <input id='surname' onChange={inputChange} />
        </div>
        <div className='modal-form-email'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' onChange={inputChange} />
        </div>
        <div className='modal-form-password'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' onChange={inputChange} />
        </div>
        <div className='modal-form-image'>
          <label htmlFor='image'>Avatar</label>
          <ImageUpload inputId='image' onChange={inputHandler} />
        </div>
        <div className='modal-form-button'>
          <Button disabled={!formState.isValid}>{isAdmin ? 'ADD NEW' : 'REGISTER'}</Button>
        </div>
        {!isAdmin &&
            <p>Do you have account? Go to <span onClick=    {switchAuthForm}>login</span></p>
        }
    </form>
  )
}

export default NewUser;
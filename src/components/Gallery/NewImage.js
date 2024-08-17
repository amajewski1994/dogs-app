import React from 'react'
import Button from '../../shared/Button'
import ImageUpload from '../../shared/ImageUpload'
import { useForm } from '../../hooks/form-hook'

const NewImage = () => {

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      breed: {
        value: '',
        isValid: false
      },
      images: {
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
        <div className='modal-form-breed'>
          <label htmlFor='breed'>Breed</label>
          <input id='breed' onChange={inputChange} />
        </div>
        <div className='modal-form-images'>
          <label htmlFor='images'>Images</label>
          <ImageUpload inputId='images' onChange={inputHandler} />
        </div>
        <div className='modal-form-button'>
          <Button disabled={!formState.isValid}>ADD NEW</Button>
        </div>
    </form>
  )
}

export default NewImage;
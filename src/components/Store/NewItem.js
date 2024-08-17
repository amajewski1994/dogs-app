import React from 'react'
import Button from '../../shared/Button'
import ImageUpload from '../../shared/ImageUpload'
import { useForm } from '../../hooks/form-hook'

const NewItem = () => {

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      price: {
        value: '',
        isValid: false
      },
      category: {
        value: '',
        isValid: false
      },
      quantity: {
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
        <div className='modal-form-price'>
          <label htmlFor='price'>Price</label>
          <input id='price' type='number' onChange={inputChange} />
        </div>
        <div className='modal-form-category'>
          <label htmlFor='category'>Category</label>
          <input id='category' onChange={inputChange} />
        </div>
        <div className='modal-form-quantity'>
          <label htmlFor='quantity'>Quantity</label>
          <input id='quantity' type='number' onChange={inputChange} />
        </div>
        <div className='modal-form-description'>
          <label htmlFor='description'>Description</label>
          <textarea id='description' onChange={inputChange} />
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

export default NewItem;
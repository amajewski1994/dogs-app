import React from 'react'

const Button = ({children, className, onClick, size, disabled}) => {
  return (
    <div className={`button ${className} ${size && 'button-' + size} ${disabled && 'disabled'}`} onClick={onClick} >{children}</div>
  )
}

export default Button
import React from 'react'

const Image = ({ src, alt, className, size, onClick }) => {
  return (
    <div className={`image ${className} image-${size}`} onClick={onClick ? onClick : null}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Image
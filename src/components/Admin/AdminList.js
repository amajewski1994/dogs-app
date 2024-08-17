import React, { useState } from 'react'
import dogBlank from '../../images/blank_dog.png'
import Image from '../../shared/Image'

const AdminList = ({ elements, removeElement, activeIndex }) => {

    const elementList = elements.map((element, id) => {
        let image = dogBlank
        if(activeIndex === 2 && element.image) {
            image = element.image
        } else if (activeIndex !== 2 && element.images && element.images.length > 0) {
            image = element.images[0]
        }
        return <li key={id} className={`element ${id % 2 === 0 ? 'even' : 'odd'}`}>
            <Image src={image} alt={`${element.name}-image`} className='element-image' />
            <div className='element-name'>{element.name}</div>
            <div className='element-delete' onClick={() => removeElement(element.id)}>x</div>
        </li>
    })

  return (
    <ul className='admin-list'>
        {elements.length > 0 ? elementList : <h2>Empty</h2>}
    </ul>
  )
}

export default AdminList;
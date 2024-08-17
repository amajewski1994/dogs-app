import React, { useEffect, useState } from 'react'
import { ADMIN_MENU } from '../../shared/Menu'
import AdminList from './AdminList'
import dogBlank from '../../images/blank_dog.png'
import dogTest from '../../images/dog_0.jpg'
import Button from '../../shared/Button'
import Modal from '../../shared/Modal'
import NewUser from '../Auth/NewUser'
import NewImage from '../Gallery/NewImage'
import NewItem from '../Store/NewItem'

const DUMMY_PRODUCTS = [
    {
        id: 0,
        name: 'Karma dla psa',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 10,
        quantity: 0,
        maxQuantity: 0,
        images: [],
        category: 'food'
    },
    {
        id: 1,
        name: 'Figurka Jamnika',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 20,
        quantity: 0,
        maxQuantity: 3,
        images: [],
        category: 'other'
    },
    {
        id: 2,
        name: 'Figurka Charta',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 40,
        quantity: 0,
        maxQuantity: 2,
        images: [],
        category: 'other'
    },
]

const DUMMY_DOGS = [
    {
        id: 0,
        name: 'Bodzio',
        breed: 'chart',
        likeIDs: ['123456', '123457', '123458'],
        likes: 3,
        commentIDs: ['123456', '123457'],
        comments: 0,
        images: [dogBlank, dogTest, dogBlank],
        activeImageIndex: 0,
    },
    {
        id: 1,
        name: 'Bruno',
        breed: 'bulldog',
        likeIDs: [],
        likes: 0,
        commentIDs: ['123456', '123457', '123458'],
        comments: 3,
        images: [dogTest],
        activeImageIndex: 0,
    },
]

const DUMMY_USERS = [
    {
        id: 0,
        name: 'Iwan',
        email: 'iwan@wp.pl',
        image: dogTest,
    },
    {
        id: 1,
        name: 'Piotr',
        email: 'piotr@wp.pl',
        image: dogBlank,
    },
]


const Admin = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [elements, setElements] = useState(false)
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if(activeIndex === 0) return setElements(DUMMY_PRODUCTS)
        if(activeIndex === 1) return setElements(DUMMY_DOGS)
        if(activeIndex === 2) return setElements(DUMMY_USERS)
    }, [activeIndex])

    const hideModal = () => {
        setModal(false)
    }
    
      const showModal = () => {
        setModal(true)
    }

    
    const removeElement = (id) => {
        const _elements = [...elements]
        const filteredElements = _elements.filter(element => element.id !== id)
        setElements(filteredElements)
    }
    
    const menuList = ADMIN_MENU.map((element, id) => {
        return <li key={id} id={id} className='admin-menu-list-element'
        onClick={() => setActiveIndex(id)}
        >
            {element}
        </li>
    })

  return (
    <>
    <Modal
        show={modal}
        onCancel={hideModal}
        header={activeIndex === 0 ? 'New Item' : activeIndex === 1 ? 'New Photo' : 'New User'}
        children={
            activeIndex === 0 ? <NewItem />
            : activeIndex === 1 ? <NewImage /> : <NewUser isAdmin={true} />
        }
      ></Modal>
    <div className='admin flex-container'>
        <div className='admin-left'>
            <ul className='admin-menu-list'>
                {ADMIN_MENU && menuList}
            </ul>
        </div>
        <div className='admin-right'>
            <div className='admin-right-button'>
                <Button className='button-success' onClick={showModal}>ADD NEW</Button>
            </div>
            <h1>{activeIndex === 0 ? 'STORE' : activeIndex === 1 ? 'GALLERY' : 'USERS'}</h1>
            {elements && <AdminList elements={elements} removeElement={removeElement} activeIndex={activeIndex} />}
        </div>
    </div>
    </>
  )
}

export default Admin
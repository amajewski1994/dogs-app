import React, { useEffect, useState } from 'react'
import dogBlank from '../../images/blank_dog.png'
import Button from '../../shared/Button'
import Modal from '../../shared/Modal'
import NewItem from './NewItem'

import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {
        id: 0,
        name: 'Karma dla psa',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 10,
        quantity: 0,
        maxQuantity: 0,
        images: null,
        category: 'food'
    },
    {
        id: 1,
        name: 'Figurka Jamnika',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 20,
        quantity: 0,
        maxQuantity: 3,
        images: null,
        category: 'other'
    },
    {
        id: 2,
        name: 'Figurka Charta',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 40,
        quantity: 0,
        maxQuantity: 2,
        images: null,
        category: 'other'
    },
]

const AVAILABLE_CATEGORIES = ['food', 'toys', 'other']

const Store = () => {

    const [products, setProducts] = useState(DUMMY_PRODUCTS)
    const [searchName, setSearchName] = useState('')
    const [searchPrice, setSearchPrice] = useState(100)
    const [searchCategory, setSearchCategory] = useState('')
    const [searchAvailabilty, setSearchAvailabilty] = useState(false)

    const [modal, setModal] = useState(false);

    const [filtersVisible, setFiltersVisible] = useState(false);

    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
  });

  useEffect(() => {
      const handleResize = () => {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight
          });
        };
        
      handleResize()
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

    const productsList = products.map((product, id) => {
        return <li key={id} className='list-right__container product-cart'>
            <div className='product-cart-image'>
                <img src={dogBlank} alt='dog_blank' />
            </div>
            <div className='cart-info product-cart-info'>
                <div className='product-cart-name'>
                    {product.name}
                </div>
                <div className='product-cart-price'>
                    <div>
                        {product.price} $
                    </div>
                </div>
            </div>
            <Link to={product.name}>
            <div className='product-cart-button'>
                <Button>GO TO ITEM</Button>
            </div>
            </Link>
        </li>
    })

    useEffect(() => {
        const _products = [...DUMMY_PRODUCTS]
        filterProducts(_products)
    }, [searchName, searchPrice, searchCategory, searchAvailabilty])

    const filterProducts = (_products) => {
        const filteredProducts = _products.filter(product => {
            return product.name.toUpperCase().includes(searchName.toUpperCase()) &&
                product.price <= parseInt(searchPrice) &&
                product.category.toUpperCase().includes(searchCategory.toUpperCase()) &&
                product.maxQuantity > (searchAvailabilty ? 0 : -1)
        })

        setProducts(filteredProducts)
    }


    const inputChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        if (id === 'input-name') {
            setSearchName(value)
        }
        if (id === 'input-price') {
            setSearchPrice(value)
        }
        if (id === 'category-select') {
            setSearchCategory(value)
        }
        if (id === 'input-availability') {
            const checked = e.target.checked
            setSearchAvailabilty(checked)
        }
    }

    const hideModal = () => {
        setModal(false)
    }
    
      const showModal = () => {
        setModal(true)
    }

    const filtersVisibilityHandler = () => {
        setFiltersVisible(prevState => !prevState)
    }

    return (
        <>
        <Modal
        show={modal}
        onCancel={hideModal}
        header={'New Item'}
        children={<NewItem />}
      ></Modal>
        
        <div className='flex-container list'>
            
            <div className={`list-left ${filtersVisible && 'filters-active'}`}>
                {windowSize.width <= 1000 &&
            <div className='list-left-close'>
                <Button className="button-primary button-shadow" onClick={() => {filtersVisibilityHandler()}}>CLOSE</Button>
            </div>
            }
            <h2>Filters</h2>
                <div className='products-filters-name'>
                    <label htmlFor='input-name'>Name</label>
                    <input id='input-name' type='text' onChange={inputChange} value={searchName} placeholder='Search name' />
                </div>

                <div className='products-filters-category'>
                    <label htmlFor="category-select">Category</label>
                    <select onChange={inputChange} id="category-select" className={`${searchCategory && 'select-valid'}`}>
                        <option value="">--Choose an option--</option>
                        {AVAILABLE_CATEGORIES.map((category, id) => {
                            return <option key={id} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        })}
                    </select>
                </div>

                <div className='products-filters-price'>
                <label htmlFor='input-name'>Price</label>
                    <input id='input-price' type='range' onChange={inputChange} value={searchPrice} step={10} />
                    <span id='input-price-value'>{searchPrice}$</span>
                </div>
                
                <div className='products-filters-available'>
                    <label htmlFor='input-availability'>Only available</label>
                    <div className="checkbox-wrapper">
                        <input id='input-availability' className="checkbox" type='checkBox' onChange={inputChange} value={searchAvailabilty} checked={searchAvailabilty} />
                    </div>
                </div>
            </div>
            <div className='list-right'>
            <div className='list-right-button'>
            {windowSize.width <= 1000 &&
                <Button className='button-primary button-shadow' onClick={() => {filtersVisibilityHandler()}}>FILTERS</Button>
            }
            <Button className='button-primary button-shadow' onClick={() => showModal(false, true)}>ADD NEW</Button>
            </div>
            <ul>
            
                {products && products.length > 0 ? productsList : <h2>No results</h2>}
            </ul>
            </div>
        </div>
        </>
    )
}

export default Store
import React, { useEffect, useState } from 'react'
import Card from '../../shared/Card'
import dogBlank from '../../images/blank_dog.png'
import dogDummy from '../../images/dog_0.jpg'
import Button from '../../shared/Button'
import Image from '../../shared/Image'
import { Link } from 'react-router-dom'

const DUMMY_PRODUCTS = [
    {
        id: 0,
        name: 'Karma dla psa',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 10,
        quantity: 1,
        maxQuantity: 1,
        images: [dogBlank, dogDummy, dogBlank, dogBlank],
        category: 'food'
    },
    {
        id: 1,
        name: 'Figurka Jamnika',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 20,
        quantity: 1,
        maxQuantity: 3,
        images: [dogDummy, dogDummy, dogBlank, dogBlank],
        category: 'other'
    },
    {
        id: 2,
        name: 'Figurka Charta',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 40,
        quantity: 1,
        maxQuantity: 2,
        images: [dogBlank, dogDummy, dogBlank, dogBlank],
        category: 'other'
    },
]

const Cart = () => {

    const [cartProducts, setCartProducts] = useState(DUMMY_PRODUCTS)
    const [totalAmount, setTotalAmount] = useState(0)

    const setNewTotalAmount = (cartProducts) => {
        const arr = []
        cartProducts.forEach(product => {
            const price = product.price
            const quantity = product.quantity
            const amount = price * quantity
            arr.push(amount)
        });
        const total = arr.reduce((a, b) => a + b, 0)
        setTotalAmount(total)
    }

    useEffect(() => {
        setNewTotalAmount(cartProducts)
    }, [cartProducts])

    const quantityHandler = (e) => {
        const productId = parseInt(e.target.parentNode.parentNode.id)
        const className = e.target.className
        let newCartProducts = [...cartProducts]
        const product = newCartProducts.find(product => product.id === productId)
        if(className === 'plus') {
            if(product.quantity === product.maxQuantity) return;
            product.quantity++
        } else {
            if(product.quantity === 0) return;
            product.quantity--
            if(product.quantity === 0) {
                newCartProducts = newCartProducts.filter(product => product.id !== productId)
            }
        }

        setCartProducts(newCartProducts)
    }

    const cartItemsList = cartProducts.map((product, id) => {
            return <li key={id} id={product.id} className={`cart-item ${id & 2 === 0 ? 'even' : 'odd'}`}>
                <Image src={product.images.length > 0 ? product.images[0] : dogBlank} alt={`${product.name}-image`} className='cart-item-image' size='medium' />
                {/* <div className='cart-item-image'>
                    <img src={product.images.length > 0 ? product.images[0] : dogBlank} alt={`${product.name}-image`} />
                </div> */}
                <div className='cart-item-name'>
                    {product.name}
                </div>
                <div className='cart-item-quantity'>
                    <span className='minus' onClick={quantityHandler}>-</span> <span>{product.quantity}</span> <span className='plus' onClick={quantityHandler}>+</span>
                </div>
                <div className='cart-item-amount'>
                    {product.quantity * product.price} $
                </div>
            </li>
        })

  return (
    <div className='cart'>
        <Card>
            <div className='flex-container cart-container'>
                <div className='cart-items-list'>
                {cartProducts.length > 0 ? <>
                {/* <h3>YOUR PRODUCTS</h3> */}
                <ul>
                    {cartItemsList} 
                </ul>
                </> : <div className='cart-items-list-empty'>
                                <h2>You don't have any products in your cart</h2>
                                <br />
                                <Link to="../store"><Button size='small'>GO TO STORE</Button></Link>  
                        </div>
                        }
                </div>
                <div className='cart-info'>
                    <div className='cart-info-title'>
                        <h2>CART</h2>
                    </div>
                    <div className='cart-info-description'>
                        <p>Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus.</p>
                    </div>
                    <div className='cart-info-amount'>
                        TOTAL: <span>{totalAmount} $</span>
                    </div>
                    {cartProducts.length > 0 && <div className='cart-info-button'>
                        <Button>PAY</Button>
                    </div>}
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Cart
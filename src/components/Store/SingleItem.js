import React, { useEffect, useState } from 'react';
import dogBlank from '../../images/blank_dog.png'
import dogDummy from '../../images/dog_0.jpg'
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { useNavigate } from 'react-router-dom';

const DUMMY_PRODUCT = {
        id: 0,
        name: 'Karma dla psa',
        description: 'Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.',
        price: 10,
        quantity: 0,
        maxQuantity: 2,
        images: [dogBlank, dogDummy, dogBlank, dogBlank],
        category: 'food'
    };

const SingleItem = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000 ? true : false);
    const [product, setProduct] = useState(DUMMY_PRODUCT);

    const [activeImage, setActiveImage] = useState(0);
    const [imageStyleScale, setImageStyleScale] = useState(1)
    const [imageStyleTransform, setImageStyleTransform] = useState('center')
    
    const [isInCart, setIsInCart] = useState(false);

    let navigate = useNavigate();

    const imageList = product.images.map((image, id) => {
        return <div className={`single-item-images-list ${parseInt(id) === activeImage && 'active'}`} onClick={() => {
            setActiveImage(parseInt(id))
            }} key={id}>
            <img src={image} alt={product.name + "-image"} />
        </div>
    })

    const mouseInEvent = () => {
        if (!isMobile) {
          setImageStyleScale(2)
        }
      }
    
      const mouseOutEvent = () => {
        setImageStyleScale(1)
        setImageStyleTransform('-50%, -50%')
      }
    
      const mouseMoveEvent = (e) => {
    
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop
    
        const iWidth = e.target.offsetWidth
        const iHeight = e.target.offsetHeight
    
        const transformX = x / iWidth * -100
        const transformY = y / iHeight * -100
    
        if (!isMobile) {
          setImageStyleTransform(`${transformX}%, ${transformY}%`)
        }
      }

      const buttonHandler = (e) => {
        e.preventDefault();
        if(!isInCart) return setIsInCart(true)
            navigate('../../cart')
      }

  return (
    <div className='single-item'>
        <Card>
            <div className='flex-container single-item__container'>
            <div className='single-item-image__container'>
                <div className='single-item-image' onMouseEnter={mouseInEvent} onMouseLeave={mouseOutEvent} onMouseMove={mouseMoveEvent}>
                    {product.images.length > 0 ? 
                    <img src={product.images[activeImage]} style={{ transform: `translate(${imageStyleTransform}) scale(${imageStyleScale})` }} />
                : <img src={dogBlank} alt='dummy-image' />}
                </div>
                <div className='single-item-images-list__container'>
                        {product.images.length > 0 ? imageList 
                        : <div className='single-item-images-list'>
            <img src={dogBlank} alt={"dummy-image"} />
        </div>}
                </div>
            </div>
            <div className='single-item-info__container'>
                <div className='single-item-info-title'>
                <h1>{product.name}</h1>
                </div>
                <div className='single-item-info-description'>{product.description}</div>
                <div className='single-item-info-others'>
                    <div className='single-item-info-availability'>
                        {product.maxQuantity > 0 ? 
                        <div className='quantity'>
                            <h5>QUANTITY AVAILABLE:</h5>
                            <p>{product.maxQuantity}</p>
                        </div>
                    : <h5 className='danger'>PRODUCT NOT AVAILABLE</h5>
                    }
                    </div>
                    <div className='single-item-info-price'>
                        <h5>{product.price} $</h5>
                    </div>
                </div>
                <div className='single-item-info-button'>
                    {/* <Link to={`${isInCart ? "../cart" : null}`}> */}
                    <Button className={isInCart ? 'button-active' : null} onClick={buttonHandler}>                    
                        {isInCart ? 'GO TO CART' : 'ADD TO CART'}
                    </Button>
                    {/* </Link> */}
                </div>
            </div>
            </div>
        </Card>
    </div>
  )
}

export default SingleItem
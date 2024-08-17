import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../shared/Button';
import dummyDog0 from '../images/dummy_dog_0.png';
import dummyDog1 from '../images/dummy_dog_1.png';
import dummyDog2 from '../images/dummy_dog_2.png';

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='home'>
        <div className='home-header'>
          <div className='home-header-image header-image-left'>
            <img src={dummyDog2} alt='homepage-dog' />
          </div>
          
          <div className='home-header-info'>
            <div className='home-header-info-title'>
              <h1>Welcome to my App!</h1>
            </div>
            <div className='home-header-info-description'>
              <p>
              Do you like dogs? Me too! <span className='smile'><FontAwesomeIcon icon="fa-solid fa-face-smile" /></span>
              </p>
              <p>
              In this app you can learn all about the doggies we love so much. <span className='heart'><FontAwesomeIcon icon="fa-solid fa-heart" /> </span>
              </p>
              <p>
              Don't wait too long and see what my application offers.<span className='arrow'><FontAwesomeIcon icon="fa-solid fa-arrow-down" /></span>
              </p>
            </div>
          </div>

          <div className='home-header-image header-image-right'>
            <img src={dummyDog1} alt='homepage-dog' />
          </div>
        </div>
        <div className='home-services'>
          <div className='home-services_container'>
            <FontAwesomeIcon icon="fa-regular fa-image" />
            <p>Show us your cute doggie or take a look at others</p>
            <Link to={'gallery'}>
              <Button>GO TO GALLERY</Button>
            </Link>
          </div>

          <div className='home-services_container'>
            <FontAwesomeIcon icon="fa-solid fa-store" />
            <p>Don't you need to buy some doggie stuff?</p>
            <Link to={'store'}>
              <Button>GO TO STORE</Button>
            </Link>
          </div>
          
          <div className='home-services_container'>
          <FontAwesomeIcon icon="fa-solid fa-dog" />
            <p>Learn more about specific dog breeds</p>
            <Link to={'breeds'}>
              <Button>GO TO BREEDS</Button>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default HomePage
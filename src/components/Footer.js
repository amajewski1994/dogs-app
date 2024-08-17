import React from 'react';
import dogBlank from '../images/blank_dog.png'
import { MENU } from '../shared/Menu';
import Image from '../shared/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const menuList = MENU.map((element, id) => {
    if(parseInt(id) === MENU.length - 1) return null;
    return <NavLink key={id} to={element.toLowerCase()}><li className='footer-top-navigation-element'>{element}</li></NavLink>
})

  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-navigation'>
                <ul>
                    {menuList}
                </ul>
            </div>
            <div className='footer-top-middle'>
                <h2>DOGGS APP</h2>
                <Image src={dogBlank} alt='footer-logo' className='footer-top-middle-image' size='medium' />
            </div>
            <div className='footer-top-media'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            </div>
        </div>
        <div className='footer-bottom'>
            Adrian Majewski | 2024 | All rights reserved.
        </div>
    </div>
  )
}

export default Footer
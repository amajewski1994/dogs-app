import React, { useEffect, useState } from 'react';
import dogBlank from '../images/blank_dog.png'
import { MENU } from '../shared/Menu';
import Image from '../shared/Image';
import Modal from '../shared/Modal';
import Login from './Auth/Login';
import NewUser from './Auth/NewUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, NavLink } from "react-router-dom";

const Navigation = () => {

    const [modal, setModal] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

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

  const hamburgerClickHandler = () => {
    setHamburgerMenu(prevState => !prevState)
  }
    

    const switchAuthForm = () => {
        setIsLoginForm(prevState => !prevState)
        window.scroll(0, 0)
    }

    const hideModal = () => {
        setModal(false)
    }
    
      const showModal = () => {
        setHamburgerMenu(false)
        setModal(true)
    }

    const logoutHandler = () => {
      setHamburgerMenu(false)
      setIsLogin(false)
  }

    const menuList = MENU.map((element, id) => {
      if(parseInt(id) === MENU.length - 1) return <li key={id} className='navigation-menu-element' onClick={!isLogin ? showModal : logoutHandler}>{!isLogin ? element : 'LOGOUT'}</li>

      if(element === "CART") return <NavLink key={id} to={element.toLowerCase()}>
        <li onClick={() => {setHamburgerMenu(false)}} className='navigation-menu-element'>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </li></NavLink>

    return <NavLink key={id} to={element.toLowerCase()}><li onClick={() => {setHamburgerMenu(false)}} className='navigation-menu-element'>{element}</li></NavLink>
  }
  )

  return (
    <>
    <Modal
        show={modal}
        onCancel={hideModal}
        header={isLoginForm ? 'Login' : 'Register'}
        children={
          isLoginForm ? 
          <Login switchAuthForm={switchAuthForm} />
          :
          <NewUser switchAuthForm={switchAuthForm} isAdmin={false} />
        }
      ></Modal>
    <nav className='navigation'>
        <Link to='/'><Image src={dogBlank} alt='navigation-logo' className='navigation-logo' size='medium' /></Link>
        <Link to='/'><div className='navigation-title'>
          <h1>DOGGS APP</h1>
        </div></Link>
        <div className='navigation-menu'>
            {windowSize.width <= 1050 ? <>
            <FontAwesomeIcon onClick={hamburgerClickHandler} icon="fa-solid fa-bars" />
            <ul className={`navigation-menu-bar ${hamburgerMenu && 'hamburger-active'}`}>
                {menuList}
                {/* <li 
                className='navigation-menu-element avatar-container'
                >
                  {isLogin && <Image size={'small'} src={dogBlank} alt={'avatar'} className={'avatar'} />}
              </li> */}
            </ul> 
                </>
            :
            <ul>
                {menuList}
                <li 
                className='navigation-menu-element avatar-container'
                >
                  {isLogin && <Image size={'small'} src={dogBlank} alt={'avatar'} className={'avatar'} />}
              </li>
            </ul>
            }
        </div>
    </nav>
    </>
  )
}

export default Navigation
import React, { useEffect, useState } from 'react'
import dogBlank from '../../images/blank_dog.png'
import dogTest from '../../images/dog_0.jpg'
import Button from '../../shared/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../shared/Modal'
import SingleImage from './SingleImage'
import NewImage from './NewImage'

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

const AVAILABLE_BREEDS = ['chart', 'bulldog']
const DUMMY_USER_ID = '123456'

const Gallery = () => {

    const [dogs, setDogs] = useState(DUMMY_DOGS)
    const [searchName, setSearchName] = useState('')
    const [searchPrice, setSearchPrice] = useState(100)
    const [searchBreed, setSearchBreed] = useState('')
    const [searchOnlyComments, setSearchOnlyComments] = useState(false)
    const [searchOnlyLikes, setSearchOnlyLikes] = useState(false)
    
    const [userID, setUserID] = useState(DUMMY_USER_ID)
    const [activeDog, setActiveDog] = useState(null)

    const [isNew, setIsNew] = useState(false)

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

    useEffect(() => {
        const _dogs = [...DUMMY_DOGS]
        filterDogs(_dogs)
    }, [searchName, searchPrice, searchBreed, searchOnlyComments, searchOnlyLikes])

    const filterDogs = (_dogs) => {
        const filtereddogs = _dogs.filter(dog => {
            return dog.name.toUpperCase().includes(searchName.toUpperCase()) &&
                dog.likes <= parseInt(searchPrice) &&
                dog.breed.toUpperCase().includes(searchBreed.toUpperCase()) &&
                dog.comments > (searchOnlyComments ? 0 : -1) &&
                dog.likes > (searchOnlyLikes ? 0 : -1)
        })

        setDogs(filtereddogs)
    }

    const likeHandler = (element, userID) => {
        const _dogs = [...dogs]
        const _element = _dogs.find(dog => dog.id === element.id)
        if(_element.likeIDs.includes(userID)) {
            const index = _element.likeIDs.indexOf(userID);
            if (index > -1) {
                _element.likeIDs.splice(index, 1);
                _element.likes -= 1
            }
        } else {
            _element.likeIDs.push(userID)
            _element.likes += 1
        }
        setDogs(_dogs)
    }
    
    const changeActiveImageIndex = (element, arrow) => {
        const _dogs = [...dogs]
        const _element = _dogs.find(dog => dog.id === element.id)
        const elementImagesLength = _element.images.length

        if(arrow === 'right') {
            _element.activeImageIndex += 1
            if(_element.activeImageIndex === elementImagesLength) {
                _element.activeImageIndex = 0;
            }
        } else {
            _element.activeImageIndex -= 1
            if(_element.activeImageIndex < 0) {
                _element.activeImageIndex = _element.images.length - 1;
            }
        }
        setDogs(_dogs);
    }

    const hideModal = () => {
        setActiveDog(null)
        setModal(false)
      }
    
      const showModal = (dog, addNew) => {
        if(dog) {
            setActiveDog(dog)
        }
        setIsNew(addNew)
        window.scrollTo(0, 0)
        setModal(true)
      }

    const dogsList = dogs.map(dog => {

        return <li key={dog.id} className='list-right__container dog-cart'>
            <div className='dog-cart-image'>
                {dog.images.length > 0 ? 
                <>
                <img src={dog.images[dog.activeImageIndex]} alt='dog_blank' onClick={() => showModal(dog, false)} />
                <div className={`dog-cart-image-left`} onClick={() => changeActiveImageIndex(dog, 'left')}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </div>
                <div className={`dog-cart-image-right`} onClick={() => changeActiveImageIndex(dog, 'right')}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
                </> :
                <img src={dogBlank} alt='dog_blank' />
            }
                </div>
            <div className='cart-info dog-cart-info'>
                <div className='dog-cart-info-left'>
                    <div className='dog-cart-name'>
                        {dog.name}
                    </div>
                    <div className='dog-cart-breed'>
                        Breed: {dog.breed}
                    </div>
                </div>
                <div className='dog-cart-info-right'>
                <div className='dog-cart-comments'>
                <FontAwesomeIcon icon="fa-regular fa-comment" />
                <span>{dog.comments}</span>
                </div>
                <div className='dog-cart-like' onClick={() => likeHandler(dog, userID)}>
                    {dog.likeIDs.includes(userID) ? <FontAwesomeIcon icon="fa-solid fa-heart" /> :
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                }
                <span>{dog.likes}</span>
                </div>
                </div>
            </div>
        </li>
    })

    const inputChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        if (id === 'input-name') {
            setSearchName(value)
        }
        if (id === 'input-price') {
            setSearchPrice(value)
        }
        if (id === 'breed-select') {
            setSearchBreed(value)
        }
        if (id === 'input-comments') {
            const checked = e.target.checked
            setSearchOnlyComments(checked)
        }

        if (id === 'input-likes') {
            const checked = e.target.checked
            setSearchOnlyLikes(checked)
        }
    }

    const filtersVisibilityHandler = () => {
        setFiltersVisible(prevState => !prevState)
    }

    return (
        <>
        <Modal
        show={modal}
        onCancel={hideModal}
        header={isNew ? 'ADD NEW' : activeDog && activeDog.name}
        children={
            isNew ? <NewImage /> :
          <SingleImage activeDog={activeDog} changeActiveImageIndex={changeActiveImageIndex} />
        }
      ></Modal>
        <div className='flex-container list'>
            
            <div className={`list-left ${filtersVisible && 'filters-active'}`}>
            {windowSize.width <= 1000 &&
            <div className='list-left-close'>
                <Button className="button-primary button-shadow" onClick={() => {filtersVisibilityHandler()}}>CLOSE</Button>
            </div>
            }
            <h2>Filters</h2>
                <div className='dogs-filters-name'>
                    <label htmlFor='input-name'>Name</label>
                    <input id='input-name' type='text' onChange={inputChange} value={searchName} placeholder='Search name' />
                </div>

                <div className='dogs-filters-breed'>
                    <label htmlFor="breed-select">Breed</label>
                    <select onChange={inputChange} id="breed-select">
                        <option value="">--Choose an option--</option>
                        {AVAILABLE_BREEDS.map((breed, id) => {
                            return <option key={id} value={breed}>
                                {breed.charAt(0).toUpperCase() + breed.slice(1)}
                            </option>
                        })}
                    </select>
                </div>

                {/* <div className='dogs-filters-price'>
                <label htmlFor='input-name'>Price</label>
                    <input id='input-price' type='range' onChange={inputChange} value={searchPrice} step={10} />
                    <span id='input-price-value'>{searchPrice}$</span>
                </div> */}

                <div className='dogs-filters-available'>
                    <label htmlFor='input-comments'>Only with comments</label>
                    <div className="checkbox-wrapper">
                    <input id='input-comments' className="checkbox" type='checkBox' onChange={inputChange} value={searchOnlyComments} checked={searchOnlyComments} />
                    </div>
                </div>

                <div className='dogs-filters-available'>
                    <label htmlFor='input-likes'>Only with likes</label>
                    <div className="checkbox-wrapper">
                    <input id='input-likes' className="checkbox" type='checkBox' onChange={inputChange} value={searchOnlyLikes} checked={searchOnlyLikes} />
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
                {dogs && dogs.length > 0 ? dogsList : <h2>No results</h2>}
            </ul>
            </div>
        </div>
        </>
    )
}

export default Gallery
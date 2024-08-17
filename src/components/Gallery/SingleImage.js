import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DUMMY_COMMENTS = [
    {
        id: 123,
        name: 'Adam',
        comment: 'Wow thats sweet doggy!',
        date: new Date().toLocaleDateString('en-GB'),
    },
    {
        id: 124,
        name: 'Test123',
        comment: "I've never seen anything like that",
        date: new Date().toLocaleDateString('en-GB'),
    },
    {
        id: 125,
        name: 'XMan71',
        comment: "Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.",
        date: new Date().toLocaleDateString('en-GB'),
    },
    {
        id: 123,
        name: 'Adam',
        comment: 'Wow thats sweet doggy!',
        date: new Date().toLocaleDateString('en-GB'),
    },
    {
        id: 124,
        name: 'Test123',
        comment: "I've never seen anything like that",
        date: new Date().toLocaleDateString('en-GB'),
    },
    {
        id: 125,
        name: 'XMan71',
        comment: "Duis ac massa porttitor, egestas libero non, tincidunt libero. Aliquam at elementum neque. Sed risus tellus, tincidunt ac enim quis, malesuada commodo purus. Nam tincidunt laoreet erat, sed maximus lacus imperdiet a. Sed ultricies auctor velit, a pharetra nulla ultricies eget.",
        date: new Date().toLocaleDateString('en-GB'),
    },
    
]

const SingleImage = ({activeDog, changeActiveImageIndex}) => {

    const comments = DUMMY_COMMENTS.map((singleComment, index) => <li className={`comment ${index % 2 === 0 && 'even'}`}>
        <div className='comment-top'>
            <span className='comment-top-name'>{singleComment.name}</span>
            <span className='comment-top-date'>{singleComment.date}</span>
        </div>
        <div className='comment-bottom'>
            {singleComment.comment}
        </div>
    </li>)

  return (
    <div className='single-image'>
          <div className='single-image-modal'>
            <img src={activeDog && activeDog.images[activeDog.activeImageIndex]} alt='dog-image' />
            <div className={`dog-cart-image-left`} 
            onClick={() => changeActiveImageIndex(activeDog, 'left')}
            >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                </div>
                <div className={`dog-cart-image-right`} 
                onClick={() => changeActiveImageIndex(activeDog, 'right')}
                >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
          </div>
          <div className='comments'>
            <div className='comments-title'>
                <h3>COMMENTS</h3>
            </div>
            <div className='comments-user'>
                <h5>Your comment</h5>
                <textarea></textarea>
            </div>
            <div className='comments-all'>
                <ul>
                {DUMMY_COMMENTS.length > 0 ? comments : null}
                </ul>
            </div>
          </div>
          </div>
  )
}

export default SingleImage
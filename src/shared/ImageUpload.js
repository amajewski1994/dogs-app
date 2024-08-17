import Button from './Button';

import React, { useRef, useState, useEffect } from 'react';

import userDummy from '../images/dummy_user_image.png'
import Image from './Image';

const ImageUpload = ({ inputId, onChange, errorText }) => {
  const [file, setFile] = useState(false);
  const [imagesValue, setImagesValue] = useState([]);
  const [imageValue, setImageValue] = useState();
  const [images, setImages] = useState([]);
  const [image, setImage] = useState();
  const [isValid, setIsValid] = useState(false);
  const [activeImage, setActiveImage] = useState(-1);

  const filePickerRef = useRef();

  useEffect(() => {
    if(images.length <= 0) return onChange(inputId, '', false);
    onChange(inputId, images, true)
  }, [images]);

  const pickedHandler = event => {
    // let pickedFile;
    // let newImagesValue
    // let fileIsValid = isValid;
    // setImagesValue([
    //   ...imagesValue,
    //   event.target.files[0]
    // ]);
    if(event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0]
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result
        if(inputId === 'images') {
          setImages(prevImages => [
            ...prevImages,
            result
          ]);

        } else {
          setImage(result);
          onChange(inputId, result, true)
        }
      }
      fileReader.readAsDataURL(file);
      // fileReader.readAsDataURL(file);
      // setImageValue(event.target.files[0])
      // setIsValid(true)
    }

    // if (event.target.files && event.target.files.length === 1) {
    //   pickedFile = event.target.files[0];
    //   setFile(pickedFile);
    //   newImagesValue = [
      //     ...imagesValue,
      //     pickedFile
      //   ]
      //   setIsValid(true);
    //   fileIsValid = true;
    // } else {
    //   setIsValid(false);
    //   fileIsValid = false;
    // }
    // props.onInput(props.id, newImagesValue, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const removeImage = (imageRemoved) => {
    const _images = [...images];
    const filteredImages = _images.filter(image => image !== imageRemoved)
    setImages(filteredImages)
  }

  const imagesList = images.map((image, id) => {
    return <li 
    key={id} 
    onMouseEnter={() => setActiveImage(id)} onMouseLeave={() => setActiveImage(-1)}
    >
      <span 
      className={`${activeImage === parseInt(id) && 'active'}`} 
      onClick={() => removeImage(image)}
      >
        x
      </span>
      <Image 
      src={image ? image : userDummy} 
      alt='user-image' 
      size='medium-large' 
      className='center' 
      />
    </li>
  })

  return (
    <div className="form-control">
      <input
        id={inputId}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />

      <div className='image-upload'>

        <div className="image-upload__preview">
          {/* {images.length > 0 && imageArea} */}
          
          {inputId === 'images' ? 
          images.length > 0 ? <ul className='images-upload__container'>{imagesList}</ul>
             : <Image src={userDummy} alt='user-image' size='medium-large' className='center' />
          :
          <Image src={image ? image : userDummy} alt='user-image' size='medium-large' className='center' />
          }
          {inputId === 'images' ? !images.length > 0 && <p>Please pick an image.</p> : !image && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler} size="small">
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default ImageUpload;


import React, { useEffect, useState } from 'react'
import Card from '../../shared/Card'
import dogBlank from '../../images/blank_dog.png'
import Button from '../../shared/Button'

import { useNavigate, useParams } from 'react-router-dom'

const DUMMY_BREED = {
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6"
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29"
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X"
  }

  const url = 'https://api.thedogapi.com/v1/images/'
  const DUMMY_REFERENCE_ID = 'HyWGexcVQ'

const SingleBreed = () => {

    const [breed, setBreed] = useState(false)
    const [breedImage, setBreedImage] = useState(false)

    let params = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
              const response = await fetch(`${url}${params.bid}`);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
          
              const json = await response.json();
              if (json && json.breeds.length > 0) {
                  setBreed(json.breeds[0]);
                }
              if (json && json.url) {
                setBreedImage(json.url);
                }
            } catch (error) {
              console.error(error.message);
            }
          }
          getData()
    }, [])
    

  return (
    <div className='single-breed'>
        <Card>
            {breed && 
            <div className='flex-container single-breed__container'>
                <div className='single-breed-image__container'>
                <div className='single-breed-image'>
                    {breedImage ? 
                    <img src={breedImage} alt={`${breed.name}-image`} />
                : <img src={dogBlank} alt='dummy-image' />}
                </div>
            </div>
            
            <div className='single-breed-info__container'>
                <div className='single-breed-info-title'>
                    <h1>{breed.name}</h1>
                </div>
                <div className='single-breed-info-description'>
                    <div className='single-breed-info-group'>
                        <span>Group: </span>{breed.breed_group ? breed.breed_group : 'no data'}
                    </div>
                    <div className='single-breed-info-origin'>
                        <span>Origin: </span>{breed.origin ? breed.origin : 'no data'}
                    </div>
                    <div className='single-breed-info-weight'>
                        <span>Weight: </span>{breed.weight.metric ? `${breed.weight.metric} kg` : 'no data'} 
                    </div>
                    <div className='single-breed-info-height'>
                        <span>Height: </span>{breed.height.metric ? `${breed.height.metric} cm` : 'no data'} cm
                    </div>
                    <div className='single-breed-info-life'>
                        <span>Life span: </span>{breed.life_span ? breed.life_span : 'no data'}
                    </div>
                    <div className='single-breed-info-for'>
                        <span>Description: </span>{breed.bred_for ? breed.bred_for : 'no data'}
                    </div>
                    <div className='single-breed-info-temperament'>
                        <span>Temperament: </span>{breed.temperament ? breed.temperament : 'no data'}
                    </div>
                    <div className='single-breed-button'>
                        <Button onClick={() => {navigate(-1)}}>BACK TO LIST</Button>
                    </div>
                </div>
            </div>
            
            </div>
            }
        </Card>
    </div>
  )
}

export default SingleBreed
import React, { useEffect, useState } from 'react'
import Card from '../../shared/Card'

import { Link } from "react-router-dom";

const url = 'https://api.thedogapi.com/v1/breeds'
const maxLength = 21

const Breeds = () => {

    const [breeds, setBreeds] = useState([])
    const [allBreeds, setAllBreeds] = useState([])
    const [searchName, setSearchName] = useState('')
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const _breeds = [...allBreeds]
        filterBreeds(_breeds)
    }, [searchName])

    useEffect(() => {
        async function getData() {
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
          
              const json = await response.json();
              setBreeds(json);
              setAllBreeds(json);
            } catch (error) {
              console.error(error.message);
            }
          }
          getData()
    }, [])

    const filterBreeds = (_breeds) => {
        const filteredBreeds = _breeds.filter(breed => {
            return breed.name.toUpperCase().includes(searchName.toUpperCase()) 
        })
        setBreeds(filteredBreeds)
    }

    const inputChange = (e) => {
        const value = e.target.value
        setSearchName(value)
        setActivePage(0)
    }

    const pageClickHandler = (id) => {
        setActivePage(id)
    }

    const breedsList = breeds.map((breed, id) => {
        if((id < maxLength * activePage) || (id >= maxLength * (activePage + 1))) return;
        return <Link to={breed.reference_image_id} key={id}><li>
            <div className='breeds-name'>
                {breed.name}
            </div>
            <div className='breeds-description'>
                {breed.bred_for}
            </div>
        </li>
        </Link>
    })

    const breedsListPagination = [...Array(Math.ceil(breeds.length / maxLength)).keys()].map((element, id) => {
        return <li key={id} className={`${activePage === id && 'active'}`} onClick={() => pageClickHandler(id)}>{element + 1}</li>
    })
    

  return (
    <div className='breeds'>
        <Card>
            <div className='breeds-list'>
                <h2>Search your favourite breed</h2>
                <div className='breeds-list-search'>
                <input placeholder='type breed' onChange={inputChange}></input>
                </div>
                <ul className='breeds-list__container'>
                    {breeds.length > 0 ? breedsList : <h3>No results, try typing something else</h3>}
                </ul>
                <div className='pagination'>
                    <ul className='pagination-list__container'>
                        {breeds.length > 0 && breedsListPagination}
                    </ul>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Breeds
import React from 'react'
import { BG_URL } from '../utils/constants'
import GPTSearchBar from './GPTSearchBar'
const GPTSearch = () => {

  return (
    <div>
        <div className=''>
        <img
          className="h-[100vh] w-full"
          src={BG_URL}
          alt="background_image"
        />
      </div>
       <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch
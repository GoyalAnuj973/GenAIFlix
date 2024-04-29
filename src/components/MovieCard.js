import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44  pr-2'>
        <img className='' src={IMG_CDN_URL + posterPath} alt="poster_img" />
    </div>
  )
}

export default MovieCard
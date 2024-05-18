import React from 'react'
import { useAppContext } from '../../context/AppContentProvider'
import MoviesCards from '../../components/MoviesCards';


const Movies = () => {
const {state} = useAppContext()
console.log(state);
  return (
    <div>
      
    <h1>Movies</h1>
    <MoviesCards />
    </div>
  )
}

export default Movies

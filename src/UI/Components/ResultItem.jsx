
import React from 'react'
import { Link } from 'react-router-dom'

const CharsByHeroe=({alter_ego,characters})=>{
  if(alter_ego===characters) return <></>;
  return(
    <p>{characters}</p>
  )
}
export const ResultItem = ({
  id,
superhero,
publisher,
alter_ego,
first_appearance,
characters}) => {
  return (
    <>
       <div  className='list animate__animated animate__fadeIn'>
          <div className='card'>
            <div className='row'>
              <div className='col-4 '>
             <img className='card-img' src={`/src/assets/heroes/${id}.jpg`} alt={superhero} />

              </div>
              <div className='col-4'>
                <div className='card-body'>
                      <h1 className='card-title'>
                        {superhero}
                      </h1>
                      <h3 className='card-text'>
                        {alter_ego}
                      </h3>
                      <CharsByHeroe characters={characters} alter_ego={alter_ego}/>
                      <p className='card-text'>
                          <small className='text-muted'>{first_appearance}</small>
                      </p>
                      <Link to={`/heroe/${id}`}>mas</Link>
                </div>


              </div>
            </div>
          </div>

       </div>

   
    </>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

const CharsByHeroe=({alter_ego,characters})=>{
  if(alter_ego===characters) return <></>;
  return(
    <p>characters</p>
  )
}
export const HeroeCard = ({
  id,
superhero,
publisher,
alter_ego,
first_appearance,
characters}) => {
  return (
    <>
       <div  className='col-3 animate__animated animate__fadeIn'>
          <div className='card'>
            <div className='row no-gutters'>
              <div className='col-4 '>
             <img className='card-img' src={`/src/assets/heroes/${id}.jpg`} alt={superhero} />

              </div>
              <div className='col-10'>
                <div className='card-body'>
                      <h5 className='card-title'>
                        {superhero}
                      </h5>
                      <p className='card-text'>
                        {alter_ego}
                      </p>
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

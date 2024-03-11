import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById, CharsByHeroe} from '../helpers/';
export const HeroePage = () => {
  const navigate = useNavigate();
  const onReturn=()=>{
    navigate(-1)
  }
  const {heroeID} = useParams();

  const heroe = useMemo(() => getHeroeById(heroeID), [heroeID]);
  if(!heroe) {return <Navigate to="/"/>}
  const {
    id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters}= heroe;
  return (
    <>
         <div  className='row mt-5'>
          <div className='col-4'>
          
             <img className='img-thumbnail' src={`/src/assets/heroes/${id}.jpg`} alt={superhero} />

              </div>
              <div className='col-8'>
                      <h3>
                        {superhero}
                      </h3>
                      <ul
                          className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                        <li className='list-group-item'><b>Publisher: </b>  {publisher}</li>
                        <li className='list-group-item'><b>First apear: </b>{alter_ego}</li>
                      </ul>
                      <h5 className='mt-3'>Characters</h5>
                      <p>{characters}</p>

                      <button 
                        className='btn btn-primary'
                        onClick={()=>onReturn()}>Regresar</button>

              </div>
            </div>
         

    </>
  )
}

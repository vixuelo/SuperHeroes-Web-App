import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;
    return (
    <div className='row'>
        {heroes.map((heroe)=>(
            <HeroeCard key={heroe.id}
                        {...heroe}
                        />
        ))}
    
    </div>
  )
}

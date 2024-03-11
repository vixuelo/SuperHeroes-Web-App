import React, { useMemo } from 'react'
import { getAllHeroesBySearch } from '../../heroes';
import { HeroeCard } from '../../heroes/components/HeroeCard';
import { ResultItem } from './ResultItem';

export const ResultList = ({qContent}) => {
    // const heroes = useMemo(() => getAllHeroesBySearch(qContent), [qContent]) ;
    const heroes=getAllHeroesBySearch(qContent);
    console.log(heroes)
  return (
  <div className='list'>
      {heroes.map((heroe)=>(
          <ResultItem key={heroe.id}
                      {...heroe}
                      />
      ))}
  
  </div>
  )
}

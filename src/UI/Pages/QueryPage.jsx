import React from 'react'
import { useParams } from 'react-router-dom'
import { ResultList } from '../Components/ResultList';
import { getAllHeroesBySearch } from '../../heroes';

export const QueryPage = () => {
    const {qContent} = useParams();
  return (
    <>
        <h1>queryPage: {qContent}</h1>
        {console.log(getAllHeroesBySearch(qContent))}
        <ResultList qContent={qContent}/>
        
    </>
    
  )
}

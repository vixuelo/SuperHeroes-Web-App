import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getAllHeroesBySearch } from '../../heroes';
import { ResultList } from '../Components/ResultList';
import { heroes } from '../../heroes/data/heroes';
export const SearchPage = () => {

  const navigate =useNavigate();
  const location = useLocation();
  const {q} = queryString.parse(location.search);
  const {searchText,onInputChange}=useForm({
    searchText:'',
  });
  const showSearch = (q?.length===0) ||(q===undefined) ;
  const showError = (q?.length>0)&& (getAllHeroesBySearch(q).length===0);
  const onSearchSubmit=(event)=>{
    event.preventDefault();
    if(searchText.length>1){
      console.log({searchText})
      // navigate(`query/${searchText}`)
      navigate(`?q=${searchText}`)
    }
  }
  return (
    <>
        <h1>
            SearchPage
        </h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching...</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input type="text" 
                      placeholder='Search by hero'
                      className='form-control'
                      name='searchText'
                      value={searchText}
                      onChange={onInputChange}
                      autoComplete='off'/>
              <button className="btn btn-outline-primary mt-1">Search</button> 
            </form>
          </div>
          
          
          <div className="col-7">
            <h4>Result</h4>
            <hr />
              <div className="alert alert-primary" style={{display : showSearch? '':'none'}}>
                Search a hero
              </div> 
              <div className="alert alert-danger"style={{display : showError? '':'none'}}>
                No results for <b>{q}</b>
              </div>
                    {getAllHeroesBySearch(q).length!==0&&< ResultList qContent={q}/>}
          </div>

        </div>
    </>
  )
}

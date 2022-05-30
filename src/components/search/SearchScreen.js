import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { getHeroeByName } from '../../selectors/getHeroeByName.js'
import { HeroCard } from '../hero/HeroCard' 

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)

  const initialForm = {
    searchText: q,
  };

  const [ values, handleInputChange ] = useForm( initialForm );

  const { searchText } = values;

  const heroesFiltered = getHeroeByName( searchText )

  const handleSearch = (e)=> {
      e.preventDefault()
      navigate(`?=${ searchText }`)
  }


  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>

        <div className="row">
          
          <div className="col-5">
              <h4>Buscar</h4>
              <hr/>

              <form onSubmit={ handleSearch }> 
                <input 
                    type="text"
                    placeholder="Buscar un héroe"
                    className="form-control"
                    name="searchText" 
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Buscar...
                </button>

              </form>
          </div>

          <div className="col-7">
              <h4>Resultados</h4>
              <hr/>

              {
                heroesFiltered.map(heroe => (
                    <HeroCard 
                        key={ heroe.id }
                        { ...heroe }
                    />
                ))
              }
          </div>

        </div>
    </>
  )
}

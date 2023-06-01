import { Filter, FilterBox } from "./styles";
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

export default function Select() {

  /* { name, code, , options, handleOnChange } */
  const [countries, setCountries] = useState()
  const [seasons, setSeasons] = useState()
  const [leagues, setLeagues] = useState()

  useEffect(() => {
    async function ListCountries() {
      const { data: { response } } = await api.get('countries')
      setCountries(response)

    }
    ListCountries()

  }, [])

  useEffect(() => {
    async function ListSeasons() {
      const { data: { response } } = await api.get('leagues/seasons')
      setSeasons(response)

    }
    ListSeasons()

  }, [])

  useEffect(() => {
    async function Listleagues() {
      const { data: { response } } = await api.get(`leagues?season=${numberOfSeason}&country=${coutrieForLeague}`)


      console.log(setLeagues(response))

    }
    Listleagues()

  }, []) 



 /*  let valueSelect = 
  let numberOfSeason = 
  let coutrieForLeague =  

  function handleOnChange(e) {
     valueSelect = e.target.value

    if(valueSelect.length == 4){
      valueSelect = numberOfSeason
     console.log(numberOfSeason+'1')
    }else{
      valueSelect = coutrieForLeague
      console.log(coutrieForLeague.toLowerCase())
    }
  }*/

  return (
    <FilterBox>
      <Filter
        onChange={handleOnChange}>
        <option>Selecione um país</option>
        {countries?.map((countrie) => {
          return <option key={countrie.name}>{countrie.name}</option>
        })}
      </Filter>

      <Filter
    onChange={handleOnChange}
        options={countries}>
        <option>Selecione uma Temporada</option>
        {seasons?.map((season) => {
          return <option key={season}>{season}</option>
        })}
      </Filter>

      <Filter 
      onChange={handleOnChange}>
        <option>Selecione um Líga</option>
        {leagues?.map((league) => {
          return <option key={league.id}>{league.name}</option>
        })}
      </Filter>
    </FilterBox>
  )
}
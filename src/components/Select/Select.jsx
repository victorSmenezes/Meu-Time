import { Filter, FilterBox } from "./styles";
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

export default function Select() {

   // Funções para pegar os valores dos select's e usar como parametros nas requisições
   const [valueOfCountrie, setValueOfCountrie] = useState()
  
   function taketheValueOfCountrie(e) {
     setValueOfCountrie(e.target.value) 
    
  }

  function taketheValueOfLeague(e) {
    let valueOfLeague = e.target.value

    console.log(valueOfLeague)
  }

  function taketheValueOfSeason(e) {
    let valueOfSeason = e.target.value

    console.log(valueOfSeason)
  }



  //Requisição API
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
    async function Listleagues() {
      const { data: { response } } = await api.get(`leagues?country=${valueOfCountrie}`)
    
      
      console.log(setLeagues(response))
      
    }
    Listleagues()
    
  }, []) 
  
  useEffect(() => {
    async function ListSeasons() {
      const { data: { response } } = await api.get(`leagues/seasons`)
      setSeasons(response)

    }
    ListSeasons()

  }, [])


  return (
    <FilterBox>
      <Filter
        onChange={taketheValueOfCountrie}>
        <option>Selecione um país</option>
        {countries?.map((countrie) => {
          return <option key={countrie.name}>{countrie.name}</option>
        })}
      </Filter>

      <Filter 
      onChange={taketheValueOfLeague}>
        <option>Selecione um Líga</option>
        {leagues?.map((league) => {
          return <option key={league.league.id}>{league.league.name}</option>
        })}
      </Filter>

      <Filter
    onChange={taketheValueOfSeason}>
        <option>Selecione uma Temporada</option>
        {seasons?.map((season) => {
          return <option key={season}>{season}</option>
        })}
      </Filter>
    </FilterBox>
  )
}
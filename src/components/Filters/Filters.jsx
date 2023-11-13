/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */

import { useEffect, useState } from 'react';

import { useParamsContext } from '@/context/Params';
import { ListCountries, ListSeasons, Listleagues } from '@/services/getData';

import { Filter, FilterBox } from './styles';

export default function Filters() {
  // Requisição API
  const [countries, setCountries] = useState();
  const [seasons, setSeasons] = useState();
  const [leagues, setLeagues] = useState();

  const [valueOfCountrie, setValueOfCountrie] = useState(undefined);
  const [valueOfLeague, setValueOfLeague] = useState();
  const [valueOfSeason, setValueOfSeason] = useState();
  const [valueOfLeagueId, setValueOfLeagueId] = useState();

  let { 
    setParamsCountry, 
    setParamsLeague, 
    setParamsLeagueId,
    setParamSeason 
  } = useParamsContext();

  useEffect(() => {
    async function getDatas() {
      Promise.all([ListCountries(), ListSeasons()])
        .then(([countries, seasons]) => {
          setCountries(countries), setSeasons(seasons);
        })
        .catch((err) => console.error(err));
    }

    getDatas();
  }, []);

  useEffect(() => {
    async function getDataLeagues() {
      setLeagues(await Listleagues(valueOfCountrie));
    }

    getDataLeagues();
  }, [valueOfCountrie]);

  function takeTheValueOfCountrie(e) {
    setValueOfCountrie(e.target.value);
    setParamsCountry(e.target.value)
    }

  function takeTheValueOfLeague(e) {
    setValueOfLeague(e.target.value);
    setValueOfLeagueId(e.target.options[e.target.selectedIndex].id);
    setParamsLeagueId(e.target.options[e.target.selectedIndex].id)
    setParamsLeague(e.target.value)
  }

  function takeTheValueOfSeason(e) {
    setValueOfSeason(e.target.value);
    setParamSeason(e.target.value)
  }

  return (
    <>
      <FilterBox>
        <Filter onChange={takeTheValueOfCountrie}>
          <option value="">Selecione um país</option>
          {countries?.map((countrie) => {
            return <option key={countrie.name}>{countrie.name}</option>;
          })}
        </Filter>

        <Filter id={valueOfLeagueId} onChange={takeTheValueOfLeague}>
          <option value="">Selecione um Líga</option>
          {leagues?.map((league) => {
            return (
              <option id={league.league.id} key={league.league.id}>
                {league.league.name}
              </option>
            );
          })}
        </Filter>

        <Filter onChange={takeTheValueOfSeason}>
          <option>Selecione uma Temporada</option>
          {seasons?.map((season) => {
            return <option key={season}>{season}</option>;
          })}
        </Filter>
      </FilterBox>
    </>
  );
}

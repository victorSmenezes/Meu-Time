import { useEffect, useState } from 'react';

import { api } from '@/services/api';

import Team from '../Teams/Team';
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

  function takeTheValueOfCountrie(e) {
    setValueOfCountrie(e.target.value);
  }

  function takeTheValueOfLeague(e) {
    setValueOfLeague(e);
  }

  function takeTheValueOfLeagueId(league) {
    setValueOfLeagueId(league);
  }

  function takeTheValueOfSeason(e) {
    setValueOfSeason(e.target.value);
  }

  useEffect(() => {
    async function ListCountries() {
      const {
        data: { response }
      } = await api.get('countries');
      setCountries(response);
    }
    async function ListSeasons() {
      const {
        data: { response }
      } = await api.get(`leagues/seasons`, {
        results: 10
      });

      ListCountries();
      setSeasons(response);
      /* console.log(setSeasons(response)); */
    }
    ListSeasons();
  }, []);

  useEffect(() => {
    async function Listleagues() {
      const {
        data: { response }
      } = await api.get(`leagues?country=${valueOfCountrie}`);

      setLeagues(response);
      /* console.log(response); */
    }
    Listleagues();
  }, [valueOfCountrie]);

  console.log(valueOfLeagueId);
  return (
    <>
      <FilterBox>
        <Filter onChange={takeTheValueOfCountrie}>
          <option>Selecione um país</option>
          {countries?.map((countrie) => {
            return <option key={countrie.name}>{countrie.name}</option>;
          })}
        </Filter>

        <Filter>
          <option onChange={takeTheValueOfLeague}>Selecione um Líga</option>
          {leagues?.map((league) => {
            return (
              <option
                onChange={takeTheValueOfLeagueId(league.league.id)}
                key={league.league.id}
              >
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

      <Team Season={valueOfSeason} League={valueOfLeagueId} />
    </>
  );
}

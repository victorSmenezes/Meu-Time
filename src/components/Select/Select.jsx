import { useEffect, useState } from 'react';

import { api } from '@/services/api';

import { Filter, FilterBox } from './styles';

export default function Select() {
  // Funções para pegar os valores dos select's e usar como parametros nas requisições
  const [valueOfCountrie, setValueOfCountrie] = useState();

  function taketheValueOfLeague(e) {
    const valueOfLeague = e.target.value;
    return valueOfLeague;
  }

  function taketheValueOfSeason(e) {
    const valueOfSeason = e.target.value;
    return valueOfSeason;
  }

  function taketheValueOfCountrie(e) {
    setValueOfCountrie(e.target.value);
  }

  // Requisição API
  const [countries, setCountries] = useState();
  const [seasons, setSeasons] = useState();
  const [leagues, setLeagues] = useState();

  useEffect(() => {
    async function ListCountries() {
      const {
        data: { response }
      } = await api.get('countries');
      setCountries(response);
    }
    ListCountries();
  }, []);

  useEffect(() => {
    async function Listleagues() {
      const {
        data: { response }
      } = await api.get(`leagues?country=${valueOfCountrie}`);

      setLeagues(response);
    }
    Listleagues();
  }, [valueOfCountrie]);

  useEffect(() => {
    async function ListSeasons() {
      const {
        data: { response }
      } = await api.get(`leagues/seasons`);
      setSeasons(response);
    }
    ListSeasons();
  }, []);

  return (
    <FilterBox>
      <Filter onChange={taketheValueOfCountrie}>
        <option>Selecione um país</option>
        {countries?.map((countrie) => {
          return <option key={countrie.name}>{countrie.name}</option>;
        })}
      </Filter>

      <Filter onChange={(e) => taketheValueOfLeague(e)}>
        <option>Selecione um Líga</option>
        {leagues?.map((league) => {
          return <option key={league.league.id}>{league.league.name}</option>;
        })}
      </Filter>

      <Filter onChange={(e) => taketheValueOfSeason(e)}>
        <option>Selecione uma Temporada</option>
        {seasons?.map((season) => {
          return <option key={season}>{season}</option>;
        })}
      </Filter>
    </FilterBox>
  );
}

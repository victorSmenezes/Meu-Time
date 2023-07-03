'use client';

import { useEffect, useState } from 'react';

import { api } from '@/services/api';

import Select, {
  taketheValueOfSeason,
  taketheValueOfLeague
} from '../Select/Select';

export default function Teams() {
  // Valores dos select's
  const valueOfLeague = taketheValueOfLeague();
  console.log(valueOfLeague);
  const valueOfSeason = taketheValueOfSeason();

  const [listOfTeams, setListOfTeams] = useState();

  useEffect(() => {
    async function RequisitionOfTeams() {
      try {
        const response = await api.get(
          `teams?league=${valueOfLeague}&season=${valueOfSeason}`
        );

        setListOfTeams(response);
        console.log(response);
      } catch (error) {
        console.error('Erro ao buscar os times:', error);
      }
    }

    RequisitionOfTeams();
  }, [Select.valueOfCountrie]);

  return (
    <>
      <option>Times</option>
      {valueOfSeason &&
        listOfTeams?.data?.map((team) => {
          return <option key={team.id}>{team.name}</option>;
        })}
    </>
  );
}

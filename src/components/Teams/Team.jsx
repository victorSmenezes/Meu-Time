import { useEffect, useState } from 'react';

import { api } from '@/services/api';

import { BoxOfTeams, FilterTeams, IconWarning, Warning } from './styles';

export default function Team({ Season, League }) {
  const [listOfTeams, setListOfTeams] = useState(null);
  /* console.log(League); */
  /* useEffect(() => {
    async function RequisitionOfTeams() {
      try {
        const response = await api.get(
          `teams?league=${League.id}&season=${Season}`
        );

        setListOfTeams(response);
      } catch (error) {
        console.error('Erro ao buscar os times:', error);
      }
    }

    RequisitionOfTeams();
  }, [League, Season]); */
  console.log(League);
  return (
    <BoxOfTeams>
      <FilterTeams>
        <option>Times</option>
        {/* {Season && League
        ? listOfTeams?.map((team) => {
            return <option key={team.id}>{team.name}</option>;
          })
        : 'Defina todas as opções de filtro para aparecer a lista de times.'} */}
      </FilterTeams>

      <Warning>
        <IconWarning />
        Preencha todos os filtros para que os times apareçam
      </Warning>
    </BoxOfTeams>
  );
}

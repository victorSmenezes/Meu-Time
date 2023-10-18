import { useEffect, useState } from 'react';

import Image from 'next/image';
import { api } from '@/services/api';

import { BoxOfTeams, FilterTeams, IconWarning, Warning } from './styles';

export default function Team({ Season, League }) {
  const [teams, setTeams] = useState([]);

  console.log(League);

  useEffect(() => {
    async function RequisitionOfTeams() {
      try {
        const {
          data: { response }
        } = await api.get(`teams?league=${League}&season=${Season}`);

        setTeams(response);
        console.log(response);
      } catch (error) {
        console.error('Erro ao buscar os times:', error);
      }
    }

    RequisitionOfTeams();
  }, [League && Season]);

  return (
    <BoxOfTeams>
      <h4>Times</h4>
      <hr />
      <FilterTeams>
        {teams?.map((team) => {
          return (
            <>
              <li key={team.team.id}>
                {team.team.name}{' '}
                <Image
                  src={team.team.logo}
                  alt="team-logo"
                  width={35}
                  height={30}
                />
              </li>
              <hr />
            </>
          );
        })}
      </FilterTeams>

      <Warning>
        <IconWarning />
        Preencha todos os filtros para que os times apareçam
      </Warning>
    </BoxOfTeams>
  );
}

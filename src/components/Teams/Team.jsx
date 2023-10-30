/* eslint-disable import-helpers/order-imports */
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { RequisitionOfTeams } from '@/services/getData';

import { BoxOfTeams, FilterTeams, IconWarning, Warning } from './styles';

export default function Team({ Season, League }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getDataTeams() {
      setTeams(await RequisitionOfTeams(League, Season));
    }

    getDataTeams();
  }, [League, Season]);

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

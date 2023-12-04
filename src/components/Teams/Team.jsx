/* eslint-disable import-helpers/order-imports */
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { RequisitionOfTeams } from '@/services/getData';

import { BoxOfTeams, FilterTeams, IconWarning, Warning } from './styles';
import { useParamsContext } from '@/context/Params';

export default function Team() {
  const [teams, setTeams] = useState();

  let { paramsLeagueId, paramSeason, setParamTeamId } = useParamsContext()

  useEffect(() => {
    async function getDataTeams() {
      setTeams(await RequisitionOfTeams(paramsLeagueId, paramSeason));
    }
    getDataTeams();
  }, [paramsLeagueId, paramSeason]);

  function takeTheTeamId(id) {
    setParamTeamId(id);
    }

  return (
    <BoxOfTeams>
      <h2>Times</h2>
      <hr />
      <FilterTeams>
        {teams?.map((team) => {
          return (
            <>
              <li 
              key={team.id} 
              onClick={() => takeTheTeamId(team.id)}
              >
                <button>{team.name}{' '}
                <Image
                  src={team.logo}
                  alt="team-logo"
                  width={35}
                  height={30}
                />
                </button>
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

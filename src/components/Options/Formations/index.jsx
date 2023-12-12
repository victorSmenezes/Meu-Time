import Loading from "@/layout/Loading"
import { Containers, Modal } from "./styles"
import { useState, useEffect } from 'react';
import { useParamsContext } from "@/context/Params";
import { TeamStatistics } from "@/services/getData";

function Formations() {
  const [formations, setFormations] = useState()
  let { paramsLeagueId, paramTeamId, paramSeason } = useParamsContext()

  useEffect(() => {
    async function Statistics() {
      setFormations(await TeamStatistics(paramsLeagueId, paramTeamId, paramSeason))
    }

    Statistics()
  }, [paramsLeagueId, paramTeamId, paramSeason])

  return (
    <>
      {formations == undefined ? <Loading /> :
        <Containers>
          {formations?.lineups?.slice(0, 5)?.map((lineup, idx) => (
            <Modal key={idx}>
              <h3>Formação:
                <br />{lineup.formation}
              </h3>
              <span>Jogadas: {lineup.played}</span>
            </Modal>
          ))}
        </Containers>
      }
    </>
  )
}

export default Formations
import React from 'react'
import { Container } from './styles'
import { useState, useEffect } from 'react'
import { useParamsContext } from '@/context/Params'
import { TeamStatistics } from '@/services/getData'
import Loading from '@/layout/Loading'

function Table() {
  const [results, setResults] = useState()
  let { paramsLeagueId, paramTeamId, paramSeason } = useParamsContext()

  useEffect(() => {
    async function Statistics() {
      setResults(await TeamStatistics(paramsLeagueId, paramTeamId, paramSeason))
    }

    Statistics()
  }, [paramsLeagueId, paramTeamId, paramSeason])

  const { fixtures } = results ?? {}

  return (
    <Container>
      {fixtures == undefined || 0 ? <Loading /> :
        <table>
          <thead>
            <tr>
              <th></th>
              <th>CASA</th>
              <th>FORA</th>
              <th>TODAS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Partidas Jogadas</th>
              <td>{fixtures?.played.home}</td>
              <td>{fixtures?.played.away}</td>
              <td>{fixtures?.played.total}</td>
            </tr>

            <tr>
              <th>Vitórias</th>
              <td>{fixtures?.wins.home}</td>
              <td>{fixtures?.wins.away}</td>
              <td>{fixtures?.wins.total}</td>
            </tr>

            <tr>
              <th>Empates</th>
              <td>{fixtures?.draws.home}</td>
              <td>{fixtures?.draws.away}</td>
              <td>{fixtures?.draws.total}</td>
            </tr>

            <tr>
              <th>Derrotas</th>
              <td>{fixtures?.loses.home}</td>
              <td>{fixtures?.loses.away}</td>
              <td>{fixtures?.loses.total}</td>
            </tr>
          </tbody>
        </table>
      }
    </Container>
  )
}

export default Table
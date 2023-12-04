import { useParamsContext } from "@/context/Params";
import { RequisitionOfPlayers } from "@/services/getData";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { BoxPlayers, Container } from "./styles";
import Loading from "@/layout/Loading";


export default function Players() {
  const [infoPlayers, setInfoPlayers] = useState()
  let { paramSeason, paramTeamId } = useParamsContext()

  useEffect(() => {
    async function ListOfPlayers() {
      setInfoPlayers(await RequisitionOfPlayers(paramSeason, paramTeamId))
    }
   
    ListOfPlayers()
  }, [paramSeason, paramTeamId]);

  return (
    <>
    {infoPlayers == undefined ?  <Loading /> : 
    <Container>
        {infoPlayers?.map((player) => {
          return (
            <BoxPlayers key={player.id}>
              <Image src={player.photo} width={80} height={70} alt='foto-jogador' />
              <h3>{player.name}</h3>

              <h4>{player.age}</h4>

              <h5>{player.nationality}</h5>
            </BoxPlayers>
          )
        })
        }
    </Container>
    
  }
  </>
  )
}

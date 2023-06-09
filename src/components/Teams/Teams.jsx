'use client'

import { useEffect, useState } from "react"
import { taketheValueOfLeague, taketheValueOfSeason } from "../Select/Select";
import { api } from "@/services/api";


export default function Teams() {

  //Valores dos select's
  const valueOfLeague = taketheValueOfLeague();
  const valueOfSeason = taketheValueOfSeason();

  const [listOfTeams, setListOfTeams] = useState()

  useEffect(() => {

    const RequisitionOfTeams = async () => {
      try {
        const response = await api.get(`teams?league=${valueOfLeague}&season=${valueOfSeason}`);
        
        setListOfTeams(response);
        console.log(response)
      } 
      
      catch (error) {
        console.error('Erro ao buscar os times:', error);
      }
    }
    
    RequisitionOfTeams();

  }, [valueOfSeason, valueOfLeague])



  return (
    <>
      <option>Times</option>
      {listOfTeams?.map((team) => {
        return <option key={team.team.id}>{team.team.name}</option>
      })}
  </>
  )
}
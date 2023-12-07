import api from '@/services/api';

// Filters requests
export async function ListCountries() {
  try {
    const {
      data: { response }
    } = await api.get('countries');

    return response;
  } catch (error) {
    console.error('Erro ao buscar os países:', error);
  }
}

export async function ListSeasons() {
  try {
    const {
      data: { response }
    } = await api.get(`leagues/seasons`, {
      results: 10
    });

    return response;
  } catch (error) {
    console.error('Erro ao buscar as temporadas:', error);
  }
}

export async function Listleagues(valueOfCountrie) {
  if (valueOfCountrie == undefined){
    
    return
  } else {
  try {
    const {
      data: { response }
    } = await api.get(`leagues?country=${valueOfCountrie}`);

    return response.map((TakeLeagues) => {return TakeLeagues.league})
  } catch (error) {
    console.error('Erro ao buscar as ligas:', error);
  }
}
}

// Team request
export async function RequisitionOfTeams(League, Season) {
  if (League == undefined && Season === undefined){
    
    return
  } else {
  try {
    const {
      data: { response }
    } = await api.get(`teams?league=${League}&season=${Season}`);

    return response.map((TakeTeams) => {return TakeTeams.team})
  } catch (error) {
    console.error('Erro ao buscar os times:', error);
  }
}
}

//Team statistics
export async function TeamStatistics(League, idTeam, Season) {
  if (League == undefined && idTeam === undefined && Season === undefined){
    
    return
  } else {
  try {
    const {
      data: { response }
    } = await api.get(`teams/statistics?league=${League}&team=${idTeam}&season=${Season}`);

    return {...response}
  } catch (error) {
    console.error('Erro ao buscar estatísticas dos times:', error);
  }
}
}


//Players request
export async function RequisitionOfPlayers(season, League,idTeam) {
  if (season == undefined && idTeam == undefined){
    
    return
  } else {
  try {
    const { data: 
     { response }
  } = await api.get(`players?season=${season}&league=${League}&team=${idTeam.toString()}`)

  return response.map((TakePlayers) => {return TakePlayers.player})
  } catch (error) {
    console.error('Erro ao buscar os jogadores:', error);
  }
}
}

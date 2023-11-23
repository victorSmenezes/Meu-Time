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
  try {
    const {
      data: { response }
    } = await api.get(`leagues?country=${valueOfCountrie}`);

    return response.map((TakeLeagues) => {return TakeLeagues.league})
  } catch (error) {
    console.error('Erro ao buscar as ligas:', error);
  }
}

// Team request
export async function RequisitionOfTeams(League, Season) {
  try {
    const {
      data: { response }
    } = await api.get(`teams?league=${League}&season=${Season}`);

    return response.map((TakeTeams) => {return TakeTeams.team})
  } catch (error) {
    console.error('Erro ao buscar os times:', error);
  }
}

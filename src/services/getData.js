import api from '@/services/api';

// Filters requests
export async function ListCountries() {
  const {
    data: { response }
  } = await api.get('countries');

  return response;
}

export async function ListSeasons() {
  const {
    data: { response }
  } = await api.get(`leagues/seasons`, {
    results: 10
  });

  return response;
}

export async function Listleagues(valueOfCountrie) {
  const {
    data: { response }
  } = await api.get(`leagues?country=${valueOfCountrie}`);

  return response;
}

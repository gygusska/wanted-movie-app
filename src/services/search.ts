import { axios } from 'hooks/worker'
import { ISearchAPIRes } from 'types/search.d'

const WEATHER_BASE_URL = 'https://www.omdbapi.com/?apikey=1740db25'

const appkey = '1740db25'

interface Params {
  s: string
  page?: number
}

// 37.494958, 126.844128
export const getMovieApi = (params: Params) =>
  axios.get<ISearchAPIRes>(`${WEATHER_BASE_URL}`, {
    params: {
      ...params,
    },
  })

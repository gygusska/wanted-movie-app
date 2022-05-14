import { atom } from 'hooks/state'
import { ISearch } from 'types/search.d'

export const searchMovieList = atom<ISearch[]>({
  key: '#searchMovie',
  default: [],
})

export const bookmarkList = atom<ISearch[]>({
  key: '#bookmarkList',
  default: [],
})

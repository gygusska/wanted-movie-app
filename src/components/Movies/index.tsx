import Movie from '../Movie'
import { useMount, useState, useUnmount, useEffect } from 'hooks'
import { getMovieApi } from '../../services/search'
import { ISearchAPIRes } from '../../types/search.d'

const Movies = () => {
  const [datas, setData] = useState<ISearchAPIRes>()

  useEffect(() => {
    getMovieApi({
      s: 'iron',
      page: 1,
    }).then((res) => {
      setData(res.data)
    })
  }, [])

  if (!datas) return null

  return (
    <div>
      <ul>
        {datas.Search.map((data) => (
          <Movie key={data.imdbID} movie={data} />
        ))}
      </ul>

      <h2>검색결과가 없습니다.</h2>
    </div>
  )
}

export default Movies

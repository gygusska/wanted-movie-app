import { useMount, useState, useUnmount, useEffect } from 'hooks'
import { getMovieApi } from '../../services/search'
import { ISearchAPIRes } from '../../types/search.d'

const Movie = () => {
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
      <div>
        이미지
        {/* <img src="" alt="" /> */}
      </div>
      <div>
        <h3>{datas.Search?.[0].Title}</h3>
        <p>연도, 타입</p>
        <p>즐겨찾기 유무</p>
      </div>
    </div>
  )
}

export default Movie

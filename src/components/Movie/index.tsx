import { ISearch } from 'types/search'
import styles from './movie.module.scss'

// 인자가 props로 와서 props에 대한 정의를 해줘야함
interface IMovieProps {
  movie: ISearch
}

const Movie = ({ movie }: IMovieProps) => {
  return (
    <li className={styles.movieFlex}>
      <div className={styles.movieImg}>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className={styles.movieInfo}>
        <h3>{movie.Title}</h3>
        <p>
          연도 : {movie.Year}, 타입 : {movie.Type}
        </p>
        <p>즐겨찾기 유무</p>
      </div>
    </li>
  )
}

export default Movie

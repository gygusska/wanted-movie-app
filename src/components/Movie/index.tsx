import MovieModal from 'components/MovieModal'
import ModalPortal from 'components/MovieModal/modalPortal'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookmarkList } from 'states/movie'
import { ISearch } from 'types/search'
import styles from './movie.module.scss'
import grip from '../../assets/png/grip_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

// 인자가 props로 와서 props에 대한 정의를 해줘야함
interface IMovieProps {
  movie: ISearch
}

const Movie = ({ movie }: IMovieProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [bookmarkedList] = useRecoilState(bookmarkList)
  const isBookmarked = !!bookmarkedList.find((markedItem) => markedItem.imdbID === movie.imdbID) // !!은 확실한 Boorean값 가져옴

  const handleClick = () => {
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <li className={styles.movieFlex} onClick={handleClick} role='presentation'>
        <div className={styles.movieImg}>
          {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : <img src={grip} alt={movie.Title} />}
        </div>
        <div className={styles.movieInfo}>
          <h3>{movie.Title}</h3>
          <p>
            연도 : {movie.Year}, 타입 : {movie.Type}
          </p>
          <FontAwesomeIcon
            icon={faBookmark}
            className={`${styles.bookmarkIcon} ${cx({ [styles.isBookmarked]: isBookmarked })} `}
          />
        </div>
      </li>

      <ModalPortal>
        {isOpenModal && <MovieModal searchItem={movie} setIsModal={handleModalClose} isBookmarked={isBookmarked} />}
      </ModalPortal>
    </>
  )
}

export default Movie

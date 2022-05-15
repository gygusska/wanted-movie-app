import { Routes, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import BookmarkPage from './BookmarkPage'
import Layout from './template/Layout'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<SearchPage />} />
        <Route path='search' element={<SearchPage />}>
          <Route path=':movie' element={<SearchPage />} />
        </Route>
        <Route path='bookmark' element={<BookmarkPage />} />
      </Route>
    </Routes>
  )
}

export default App


import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import HomePage from "./pages/HomePage"
import SearchMovies from "./components/SearchMovie/searchMovie"
import NotFoundPage from "./pages/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"

function App() {
  return (<>
  <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/movies" element={<SearchMovies />}></Route>
      <Route path="/movies/:movieId" element={ <MovieDetailsPage/>}>
        <Route path="cast" element={<MovieCast/>}></Route>
        <Route path="reviews" element={<MovieReviews/>}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
  </>)
}

export default App

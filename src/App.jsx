import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Loader from "./components/Loader/Loader"
// import HomePage from "./pages/HomePage"
// import MoviesPage from "./pages/MoviesPage"
// import NotFoundPage from "./pages/NotFoundPage"
// import MovieDetailsPage from "./pages/MovieDetailsPage"
// import MovieCast from "./components/MovieCast/MovieCast"
// import MovieReviews from "./components/MovieReviews/MovieReviews"

const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"))

function App() {
  return (<>
    <Navigation />
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/movies" element={<MoviesPage />}></Route>
      <Route path="/movies/:movieId" element={ <MovieDetailsPage/>}>
        <Route path="cast" element={<MovieCast/>}></Route>
        <Route path="reviews" element={<MovieReviews/>}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      </Suspense>
  </>)
}

export default App

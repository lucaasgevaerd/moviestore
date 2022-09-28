import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { MoviePages } from '../../types/movie';
import { formatDate } from '../../util/formatDate';
import './styles.css'

function Home() {

  const api_key = "b8aadf35bce2bcae16af0d0cce150720";
  const address_image = "https://image.tmdb.org/t/p/w185";

  const [movies, setMovies] = useState<MoviePages>();

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`);
    const data = await response.json()
    setMovies(data)
  }

  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          {movies?.results.map(movie => (
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center" key={movie.id}>
              <MovieCard image={address_image + movie.poster_path} release={formatDate(movie.release_date)!} title={movie.title} voteAverage={movie.vote_average} /* genre={movie.genre_ids} */ price={99.99} id={movie.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
import { useContext, useEffect, useState } from 'react';
import { PurchasesContext } from '../../App';
import { CartItem } from '../../types/cart-item';
import { MoviePages } from '../../types/movie';
import { formatDate } from '../../util/formatDate';
import MovieCard from '../MovieCard'
import './styles.css'

function Home() {

  const api_key = "b8aadf35bce2bcae16af0d0cce150720";
  const address_image = "https://image.tmdb.org/t/p/w185";

  const { state, setState } = useContext(PurchasesContext)
  const [movies, setMovies] = useState<MoviePages>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    getMovies()
  }, [])



  const getMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`);
    const data = await response.json()
    setMovies(data)
  }

  const handleMovieData = (e: any) => {
    if (state.find(item => item.id === e.id)) {
      const updatedItem = state.find(item => item.id === e.id);
      cartItems[state.findIndex(el => el.id === e.id)] = {
        id: updatedItem?.id!,
        img: updatedItem?.img!,
        pri: updatedItem?.pri!,
        qtt: updatedItem?.qtt! + 1,
        tit: updatedItem?.tit!
      };
      setCartItems(prevItems => [...prevItems])
    } else {
      setCartItems(prevItems => [...prevItems, e])
    }
  }

  useEffect(() => {
    setState(cartItems)
  }, [cartItems, setState])

  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          {movies?.results.map(movie => (
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center" key={movie.id}>
              <MovieCard handleMovieData={handleMovieData} movieImage={address_image + movie.poster_path} release={formatDate(movie.release_date)!} title={movie.title} voteAverage={movie.vote_average} /* genre={movie.genre_ids} */ price={99.99} idMovie={movie.id} key={movie.id} />
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Home
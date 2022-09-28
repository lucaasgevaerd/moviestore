import './styles.css'
import Button from '../Button';
import { FaStar } from "react-icons/fa";
import { useContext, useState } from 'react';
import Loader from '../Loader';
import { PurchasesContext } from '../../App';

type Props = {
  image: string;
  release: string;
  title: string;
  voteAverage: number;
  genre?: [{}];
  price: number;
  id: number;
  handleMovieData?: Function;
}

function MovieCard({ image, release, title, voteAverage, price, genre, id, handleMovieData }: Props) {

  const [loaded, setLoaded] = useState(false);
  const { state, setState } = useContext(PurchasesContext)

  const handleSendMovie = () => {
    const movie = {
      image,
      title,
      price,
      quantity: 1,
      id
    }
    if (state.length === 0) {
      setState([movie])
    } else {
      if (state.some(item => item.id === movie.id)) {
        state.filter(item => item.id === movie.id && [...state, { quantity: item.quantity++ }])
        return setState([...state])
      } else {
        return setState([...state, { ...movie, quantity: 1 }])
      }
    }
  }

  return (
    <div className="movie-card-container">
      <div className="image-container">
        {loaded ? null : (
          <div className="loading-container">
            <img
              src={require("../../assets/images/default-image.jpg")}
              alt="carregando imagem"
              className="loading-image"
            />
            <div className="loading-loader">
              <Loader />
            </div>
          </div>
        )}
        <img src={image} alt={`Imagem de ${title}`} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: "none" }} />
        <p className='movie-card-release'>{release}</p>
      </div>
      <div className="content-container">
        <p className="title">{title}</p>
        <div className='star-vote-genre'>
          <FaStar color="#4b5c6b" size={'22px'} className="star" />
          <span className="vote-average">{voteAverage}</span>
          <span className='genre'>genre</span>
        </div>
        <p className="price">R$ {price}</p>
      </div>
      <div onClick={() => handleSendMovie()} className="add-movies-button-container">
        <Button buttonText="Adicionar" />
      </div>
    </div>
  )
}

export default MovieCard


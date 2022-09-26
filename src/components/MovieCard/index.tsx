import './styles.css'
import Button from '../Button';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import Loader from '../Loader';

type Props = {
  movieImage: string;
  release: string;
  title: string;
  voteAverage: number;
  genre?: [{}];
  price: number;
  idMovie: number;
  handleMovieData: Function;
}

function MovieCard({ movieImage, release, title, voteAverage, price, genre, idMovie, handleMovieData }: Props) {

  const [loaded, setLoaded] = useState(false);

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
        <img src={movieImage} alt={`Imagem de ${title}`} onLoad={() => setLoaded(true)} style={loaded ? {} : { display: "none" }} />
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
      <div onClick={() => handleMovieData({ img: movieImage, tit: title, qtt: 1, pri: price, id: idMovie })} className="add-movies-button-container">
        <Button buttonText="Adicionar" />
      </div>
    </div>
  )
}

export default MovieCard


import './styles.css'
import Button from '../Button';
import { FaStar } from "react-icons/fa";

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

  return (
    <div className="movie-card-container">
      <div className="image-container">
        <img src={movieImage} alt={`Imagem de ${title}`} />
        <p>{release}</p>
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


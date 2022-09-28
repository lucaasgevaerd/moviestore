import { FaTrash } from 'react-icons/fa'
import './styles.css'

type Props = {
  cartMovieImage: string;
  cartMovieTitle: string;
  cartMoviePrice: number;
  cartMovieQuantity: number;
  cartMovieId: number;
  handleMovieDelete: Function;
}

function ListItem({ handleMovieDelete, cartMovieImage, cartMovieTitle, cartMoviePrice, cartMovieQuantity, cartMovieId }: Props) {

  return (
    <div className="item-container">
      <img src={cartMovieImage} alt={cartMovieTitle} className="item-image" />
      <p className='item-title'>{cartMovieTitle}</p>
      <p className='item-quantity'>{cartMovieQuantity}</p>
      <p className='item-price'>R$ {cartMoviePrice}</p>
      <FaTrash className='trash' onClick={() => handleMovieDelete({ img: cartMovieImage, tit: cartMovieTitle, pri: cartMoviePrice, qtt: cartMovieQuantity, id: cartMovieId })} />
    </div>
  )
}

export default ListItem
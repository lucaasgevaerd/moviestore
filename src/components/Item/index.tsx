import { FaTrash } from 'react-icons/fa'
import './styles.css'

type Props = {
  cartMovieImage: string;
  cartMovieTitle: string;
  cartMovieQuantity: number;
  cartMoviePrice: number;
}

function Item({ cartMovieImage, cartMovieTitle, cartMovieQuantity, cartMoviePrice }: Props) {

  return (
    <div className="item-container">
      <img src={cartMovieImage} alt={cartMovieTitle} className="item-image" />
      <p className='item-title'>{cartMovieTitle}</p>
      <p className='item-quantity'>{cartMovieQuantity}</p>
      <p className='item-price'>R$ {cartMoviePrice}</p>
      <FaTrash className='trash' />
    </div>
  )
}

export default Item
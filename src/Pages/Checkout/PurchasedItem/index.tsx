import { FaTrash } from 'react-icons/fa';
import './styles.css';

type Props = {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

function PurchasedItem({ image, name, quantity, price }: Props) {
  return (
    <div className="purchased-item-container">
      <img src={image} alt={name} className="purchased-item-image" />
      <p className="purchased-item-name">{name}</p>
      <p className="purchased-item-quantity">{quantity}</p>
      <p className="purchased-item-price">R${price}</p>
      <FaTrash className='trash' />
    </div>
  )
}

export default PurchasedItem
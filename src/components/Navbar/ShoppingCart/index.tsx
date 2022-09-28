import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PurchasesContext } from '../../../App';
import { CartItem } from '../../../types/cart-item';
import Button from '../../Button';
import ListItem from '../../ListItem';
import './styles.css';


function ShoppingCart() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { state, setState } = useContext(PurchasesContext);
  const [itemsList, setItemsList] = useState<CartItem[]>([]);

  const handleClear = () => {
    setState([])
    showSidebar()
  }

  const handleTotalItems = () => {
    return state.reduce((acc, item) => acc + item.quantity, 0)
  }

  const removeMovieCart = (movie: CartItem) => {
    if (itemsList.length === 0) {
      console.log(itemsList.length)
    }
    if (itemsList.some(item => item.quantity === 1)) {
      const filterObj = itemsList.filter(item => item.id !== movie.id);
      return updateState(filterObj);
    }
    if (itemsList.some(item => item.id === movie.id && item.quantity > 0)) {
      itemsList.filter(item => item.id === movie.id && [...itemsList, { quantity: item.quantity-- }])
      return updateState([...itemsList]);
    }
  }

  const updateState = (value: CartItem[]) => {
    setState(value)
    setItemsList(value)
  }

  useEffect(() => {
    setItemsList(state);
  }, [state])

  const handleTotalvalue = () => {
    const sum = state.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    return parseFloat(sum.toFixed(2))
  }

  return (
    <>
      <div className='navbar-shopping-cart'>
        <FaShoppingCart color='#fff' size={"25px"} onClick={showSidebar} />
        <div className={(state.length > 0) ? "items active" : "items"} onClick={() => showSidebar()} key={state.length}>{handleTotalItems()}</div>
      </div>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <div className="items-container">
          <div className='title-and-clear'>
            <p>Meu carrinho</p>
            <a href="/#" onClick={handleClear}>Esvaziar</a>
          </div>
          <div className='buy-items-container'>
            {itemsList.map(movie => (
              <div className='list-container' key={movie.id}>
                <ListItem handleMovieDelete={removeMovieCart} cartMovieImage={movie.image} cartMovieTitle={movie.title} cartMoviePrice={movie.price} cartMovieQuantity={movie.quantity} cartMovieId={movie.id} />
              </div>
            ))}
          </div>
          <div className="buy-container">
            {state.length > 0 && (
              <>
                <div className='total-value-container'>
                  <div className="total">Total:</div>
                  <div className='total-value'>R$ {handleTotalvalue()}</div>
                </div>
                <Link to={'/checkout'} className="checkout-button" onClick={() => showSidebar()}>
                  <Button buttonText="Finalizar compra" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
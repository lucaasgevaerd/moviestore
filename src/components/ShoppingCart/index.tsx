import { useCallback, useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PurchasesContext } from '../../App';
import Button from '../Button';
import Item from '../Item';
import './styles.css';


function ShoppingCart() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { state, setState } = useContext(PurchasesContext);

  const handleClear = () => {
    setState([])
    showSidebar()
  }

  const handleUnits = () => {
    const sum = state.reduce((accumulator, object) => {
      return accumulator + object.qtt;
    }, 0);
    return sum
  }

  const handleTotalvalue = () => {
    const sum = state.reduce((accumulator, object) => {
      return accumulator + object.qtt * object.pri;
    }, 0);
    return parseFloat(sum.toFixed(2))
  }

  return (
    <>
      <div className='navbar-shopping-cart'>
        <FaShoppingCart color='#fff' size={"25px"} onClick={showSidebar} />
        <div className={(state.length > 0) ? "items active" : "items"} onClick={() => showSidebar()}>{handleUnits()}</div>
      </div>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <div className="items-container">
          <div className='title-and-clear'>
            <p>Meu carrinho</p>
            <a href="/#" onClick={handleClear}>Esvaziar</a>
          </div>
          <div className='buy-items-container'>
            {state.map(movie => (
              <Item cartMovieImage={movie.img} cartMovieTitle={movie.tit} cartMovieQuantity={movie.qtt} cartMoviePrice={movie.pri} key={movie.id} />
            ))}
          </div>
          <div className="buy-container">
            {state.length !== 0 && (
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
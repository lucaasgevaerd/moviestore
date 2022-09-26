import './styles.css';
import { useForm } from 'react-hook-form';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';
import { PurchasesContext } from '../../App';
import { useContext } from 'react';
import PurchasedItem from '../PurchasedItem';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Checkout() {
  const {
    register,
    getValues,
    formState: { errors }
  } = useForm();

  const { state } = useContext(PurchasesContext)

  const handleSubmitValues = () => {
    const values = getValues();
    console.log(values)

    const modalContainer = document.querySelector<HTMLElement>('.modal-container')!;
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = 'visible';
    const blurBackground = document.querySelector<HTMLDivElement>('.forgot-password-card-container')!;
    blurBackground.classList.add('blur-background')
  }

  $('#CPF').mask('###.###.###-##', {
    placeholder: '099.999.999-99'
  });

  $('#PHONE').mask('(00) 0.0000-0000', {
    placeholder: '(99) 9.9999-9999'
  });

  $('#CEP').mask('00000-000', {
    placeholder: '88110-999'
  });

  $('#EMAIL').mask("A", {
    translation: {
      "A": { pattern: /[\w@\-.+]/, recursive: true }
    },
    placeholder: 'seuemail@email.com'
  });

  const handleTotalvalue = () => {
    const sum = state.reduce((accumulator, object) => {
      return accumulator + object.qtt * object.pri;
    }, 0);
    return parseFloat(sum.toFixed(2))
  }

  return (
    <>
      <div className='checkout-container'>
        <p className='checkout-title'>Finalizar Compra</p>
        <div className='buyer-data-and-purchase-view-container'>
          <form className='buyer-data-container'>
            <input type="text" id='NAME' placeholder="Nome completo" {...register("Nome completo")} />
            <input type="text" id='CPF' placeholder="099.999.999-99" {...register("CPF")} />
            <input type="tel" id='PHONE' placeholder="(99) 9.9999-9999" {...register("Celular")} />
            <input type="email" id='EMAIL' placeholder="seuemail@email.com" {...register("Email")} />
            <input type="text" id='CEP' placeholder="88110-999" {...register("CEP")} />
            <input type="text" id='ADDRESS' placeholder="Endereço" {...register("Endereço")} />
            <input type="text" id='CITY' placeholder="Cidade" {...register("Cidade")} />
            <select id='STATE' {...register("Estado")} defaultValue={'SC'}>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </form>
          <div className='purchase-view-container-and-button'>
            <div className='purchase-header-container'>
              <p className='purchase-header-image'>Imagem</p>
              <p className='purchase-header-name'>Nome</p>
              <p className='purchase-header-quantity'>Qtd</p>
              <p className='purchase-header-price'>Preço</p>
            </div>
            <div className="purchase-view-container">
              {state.map(movie => (
                <PurchasedItem image={movie.img} name={movie.tit} quantity={movie.qtt} price={movie.pri} key={movie.id} />
              ))}
            </div>
            <div className='checkout-total-value-container'>
              <p className='checkout-total'>Total:</p>
              <p className='checkout-value'>R$ {handleTotalvalue()}</p>
            </div>
            <div className='completed-purchase' onClick={handleSubmitValues}>
              <Button buttonText='Finalizar' />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-container">
        <div className="modal-card">
          <p className="modal-thanks">Obrigado Uzumaki Naruto!</p>
          <p className="modal-description">Sua compra foi finalizada com sucesso!</p>
          <Link to='/' className='modal-link'>
            <Button buttonText='Ir para loja' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Checkout
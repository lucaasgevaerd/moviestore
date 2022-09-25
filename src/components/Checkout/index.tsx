import './styles.css';
import { useForm } from 'react-hook-form';
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';
import { PurchasesContext } from '../../App';
import { useContext } from 'react';
import Item from '../Item';
import PurchasedItem from '../PurchasedItem';
import Button from '../Button';

function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const { state } = useContext(PurchasesContext)


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

  return (
    <>
      <div className='checkout-container'>
        <p className='checkout-title'>Finalizar Compra</p>
        <div className='buyer-data-and-purchase-view-container'>
          <form onSubmit={handleSubmit(onSubmit)} className='buyer-data-container'>
            <input type="text" placeholder="Nome completo" {...register("Nome completo", { required: true, min: 1, max: 80, maxLength: 80 })} />
            <input type="text" id='CPF' placeholder="099.999.999-99" {...register("CPF", { required: true, max: 20, min: 0, maxLength: 20 })} />
            <input type="tel" id='PHONE' placeholder="(99) 9.9999-9999" {...register("Celular", { required: true, max: 15, min: 0, maxLength: 15 })} />
            <input type="email" id='EMAIL' placeholder="seuemail@email.com" {...register("Email", { required: true, max: 50, min: 0, maxLength: 50 })} />
            <input type="text" id='CEP' placeholder="88110-999" {...register("CEP", { required: true, max: 8, min: 0, maxLength: 8 })} />
            <input type="text" placeholder="Endereço" {...register("Endereço", { required: true, max: 50, min: 0, maxLength: 50 })} />
            <input type="text" placeholder="Cidade" {...register("Cidade", { required: true, max: 30, min: 0, maxLength: 30 })} />
            <select {...register("Estado", { required: true })} defaultValue={'SC'}>
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
            <div className="purchase-view-container">
              {state.map(movie => (
                <PurchasedItem image={movie.img} name={movie.tit} quantity={movie.qtt} price={movie.pri} key={movie.id} />
              ))}
            </div>
            <Button buttonText='Finalizar' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
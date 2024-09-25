import React, { useEffect, useState } from 'react';

import './styles.less';
import { registertcard } from '../../api/module/card';
import { paymentPost, paymentVerifyGet } from '../../api/module/payment';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/reducers/rootReducer';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { loading } from '../../redux/actions/spinnerActions';
import { message } from 'antd';
import { cleanCar } from '../../redux/actions/carActions';

type props = {
  closeModal: () => void,
  paynmet: (token: string) => Promise<any>
}

const Modal = ({ closeModal, paynmet }: props) => {
  const [numberCard, setNumberCard] = useState<string>('');
  const [exp_month, setExp_month] = useState<string>('');
  const [exp_year, setExp_year] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [card_holder, setcard_holder] = useState<string>('');
  const [buttonShow, setButtonShow] = useState<boolean>(true);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    if(
      numberCard.length === 16 &&
      exp_month.length === 2 &&
      exp_year.length === 2 &&
      card_holder !== '' &&
      cvc.length === 3
    ) {
      setButtonShow(false);
    }else {
      setButtonShow(true);
    }
  }, [numberCard, exp_month, exp_year, cvc, card_holder])

  const transation = async (e: any) => {
    e.preventDefault();
    dispatch(loading(true));
    const response = await registertcard({
      number: numberCard,
      exp_month,
      exp_year,
      cvc,
      card_holder
    });
    const responsePayment = await paynmet(response.data.token);
    closeModal();
    verifyPayment(responsePayment.id);
  }

  const verifyPayment = async (id: string) => {
    setTimeout(async () => {
      const response = await paymentVerifyGet(id);
      if(response.status === 'APPROVED') {
        message.open({
          type: 'success',
          content: 'La transación se realizó con éxito',
        });
        dispatch(loading(false));
        dispatch(cleanCar());
      }else if(response.status === 'PENDING') {
        verifyPayment(id)
      }else {
        dispatch(loading(false));
        message.open({
          type: 'error',
          content: 'Algo falló al realiza la transacción',
        });
      }
    }, 1000)
    
  }

  return <>
    <form className='modal'>
    <span onClick={closeModal}>X</span>
    <h5 className='modal__title'>Ingrese sus tarjeta de crédigo/débito</h5>
    <input className='modal__camp' type="number" placeholder='Número' value={numberCard} onChange={e=>setNumberCard(e.target.value)} style={{border: numberCard.length !== 16 ? '1px solid red' : '1px solid green'}}/>
    <input className='modal__camp' type="text" placeholder='Nombre(s) y apellidos' value={card_holder} onChange={e=>setcard_holder(e.target.value)} style={{border: card_holder === '' ? '1px solid red' : '1px solid green'}}/>
    <section className='modal__sec'>
      <input type="number" placeholder='MM' value={exp_month} onChange={e=>setExp_month(e.target.value)} style={{border: exp_month.length !== 2 ? '1px solid red' : '1px solid green'}}/>
      <input type="number" placeholder='AA' value={exp_year} onChange={e=>setExp_year(e.target.value)} style={{border: exp_year.length !== 2 ? '1px solid red' : '1px solid green'}}/>
      <input type="number" placeholder='CVV'  value={cvc} onChange={e=>setCVC(e.target.value)} style={{border: cvc.length !== 3 ? '1px solid red' : '1px solid green'}}/>
    </section>
    <section className='modal__check'>
      <input type='checkbox'/>
      Acepto haber leído los <strong>términos y condiciones y la política de privacidad</strong> para hacer esta compra.
    </section>
    <button style={{opacity: buttonShow ? '.5' : '1'}} disabled={buttonShow} onClick={transation}>Realizar transación</button>
  </form>
  
  </>;
}

export default Modal;
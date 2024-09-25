import React, { useState } from 'react';

import './styles.less';
import { registertcard } from '../../api/module/card';
import { paymentPost } from '../../api/module/payment';

type props = {
  closeModal: () => void,
  paynmet: (token: string) => Promise<void>
}

const Modal = ({ closeModal, paynmet }: props) => {
  const [numberCard, setNumberCard] = useState<string>('');
  const [exp_month, setExp_month] = useState<string>('');
  const [exp_year, setExp_year] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [card_holder, setcard_holder] = useState<string>('');

  const transation = async (e: any) => {
    e.preventDefault();
    const response = await registertcard({
      number: numberCard,
      exp_month,
      exp_year,
      cvc,
      card_holder
    });
    await paynmet(response.data.token);
  }

  return <form className='modal'>
    <span onClick={closeModal}>X</span>
    <h5 className='modal__title'>Ingrese sus tarjeta de crédigo/débito</h5>
    <input className='modal__camp' type="number" placeholder='Número' value={numberCard} onChange={e=>setNumberCard(e.target.value)}/>
    <input className='modal__camp' type="text" placeholder='Nombre(s) y apellidos' value={card_holder} onChange={e=>setcard_holder(e.target.value)}/>
    <section className='modal__sec'>
      <input type="number" placeholder='MM' value={exp_month} onChange={e=>setExp_month(e.target.value)}/>
      <input type="number" placeholder='AAAA' value={exp_year} onChange={e=>setExp_year(e.target.value)}/>
      <input type="number" placeholder='CVV'  value={cvc} onChange={e=>setCVC(e.target.value)}/>
    </section>
    <section className='modal__check'>
      <input type='checkbox'/>
      Acepto haber leído los <strong>términos y condiciones y la política de privacidad</strong> para hacer esta compra.
    </section>
    <button onClick={transation}>Realizar transación</button>
    
  </form>;
}

export default Modal;
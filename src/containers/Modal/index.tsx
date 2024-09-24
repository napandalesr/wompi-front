import React from 'react';

import './styles.less';

type props = {
  closeModal: () => void
}

const Modal = ({ closeModal }: props) => {
  return <form className='modal'>
    <span onClick={closeModal}>X</span>
    <h5 className='modal__title'>Ingrese sus tarjeta de crédigo/débito</h5>
    <input className='modal__camp' type="number" placeholder='Número'/>
    <input className='modal__camp' type="text" placeholder='Nombre(s) y apellidos'/>
    <section className='modal__sec'>
      <input type="number" placeholder='MM'/>
      <input type="number" placeholder='AAAA'/>
      <input type="number" placeholder='CVV' />
    </section>
    <section className='modal__check'>
      <input type='checkbox'/>
      Acepto haber leído los <strong>términos y condiciones y la política de privacidad</strong> para hacer esta compra.
    </section>
    <button>Realizar transación</button>
    
  </form>;
}

export default Modal;
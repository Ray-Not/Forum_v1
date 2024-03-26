import React from 'react'
import logo from '../../images/logoDark.svg'
import '../../styles/text.css'

function HeaderText(props) {
  return (
    <>
    <div className='row d-flex justify-content-center align-items-center mt-5 mb-5'>
      <img src={logo} style={{ maxWidth: '200px', maxHeight: '200px' }} alt='Логотип' />
    </div>
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-7 fs-1 text-light text-center' style={{fontFamily: 'ramona'}}>
        <p>
          Покупка различных привилегий, собственных моделек, префиксов и т. д.
        </p>
      </div>
    </div>
    <div className='row d-flex justify-content-center align-items-center'>
      <p className='col-6 fs-4 text-white text-center fw-lighter'>
        Купить привилегию в один клик - несложно. Выберите сервер, на котором играете,
        способ получения и необходимую привилегию. Оплатите покупку и ожидайте смену карты - привилегия у
        вас в руках. Мы ценим вашу поддержку и надеемся, что вы и дальше продолжите играть на нашем сервере.
        Если привилегия не пришла или цена списания не соответствует - обратитесь ко {' '}
        <a href='https://vk.com/nekryxa' className='link-light'>мне</a>. Ссылки битые или возникли вопросы?
        Обращайтесь в <a href='https://vk.com/cslockdown' className='link-light'>группу сервера</a>.
      </p>
    </div>
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-3'>
        <button type='button' className='btn btn-outline-light btn-lg w-100 mt-5 mb-5'>Приобрести привилегию</button>
      </div>
    </div>
    </>
  )
}


export default HeaderText
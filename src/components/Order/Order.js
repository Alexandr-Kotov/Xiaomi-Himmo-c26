import './Order.css';
import white from '../../images/white-form.jpg';
import red from '../../images/red-form.jpg';
import gray from '../../images/gray-form.jpg';

export const Order = () => {
  return (
    <section className='order'>
      <form className='order__form'> 
        <h2 className='order__title'>Заказать</h2>
        <p className='order__text'>Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам в ближайшее время</p>
        <input className='order__input' name='name' placeholder='имя' required></input>
        <input type='number'  className='order__input' name='telephone' placeholder='телефон'  required></input>
        <p className='order__text-color'>выберите желаемый цвет</p>
        <div className='order__navigation-auto'>
              <div className='order__auto-btn1'></div>
              <div className='order__auto-btn2'></div>
              <div className='order__auto-btn3'></div>
            </div>
            <div className='order__navigation-manual'>
              <label for='radio-color1' className='order__manual-btn'></label>
              <label for='radio-color2' className='order__manual-btn'></label>
              <label for='radio-color3' className='order__manual-btn'></label>
            </div>
        <button className='order__button'>ЗАКАЗАТЬ</button>
      </form>
      <div className='order__container'>
        <div className='order__container'>
          <div className='order__container-color'>
            <input className='order__input-color' type='radio' name='radio-color-btn' id='radio-color1' />
            <input className='order__input-color' type='radio' name='radio-color-btn' id='radio-color2' />
            <input className='order__input-color' type='radio' name='radio-color-btn' id='radio-color3' />
            <div className='order__slide order__slide-first'>
              <img src={gray} alt='Фото серый велосипед' />
            </div>
            <div className='order__slide'>
              <img src={white} alt='Фото белый велосипед' />
            </div>
            <div className='order__slide'>
              <img src={red} alt='Фото красный велосипед' />
            </div>
          </div>
      </div>
      </div>
      <p className='order__text-price'>32 999 грн.</p>
      <div className='order__oval1'></div>
      <div className='order__oval2'></div>
    </section>
  )
}
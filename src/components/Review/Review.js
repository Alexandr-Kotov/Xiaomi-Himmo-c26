import './Review.css';
import bicycle1 from '../../images/review-bicycle-1.jpg';
import bicycle2 from '../../images/review-bicycle-2.jpg';
import bicycle3 from '../../images/review-bicycle-3.jpg';
import bicycle4 from '../../images/review-bicycle-4.jpg'; 

export const Review = () => {
  return (
    <div className='review'>
      <div className='review__container_left'>
        <h1 className='review__title'>Xiaomi Himo C26</h1>
        <h2 className='review__subtitle'>Электрический велосипед</h2>
        <p className='review__text'>Полная свобода передвижения и надежный транспорт для путешествий на любые расстояния</p>
        <p className='review__text review__text_about' >HIMO C26 – это новый электровелосипед от Xiaomi, который создан как для езды по городу, так и бездорожью. Он имеет мощный двигатель и емкий аккумулятор, благодаря которым способен проезжать на одном заряде до 100 км, что определенно выше, чем у большинства конкурентов. А большие колеса с пневматическими шинами, дисковые тормоза, 7-скоростная трансмиссия и эргономичное сидение делают каждую поездку гораздо приятнее. </p>
        <button className='review__button'>ЗАКАЗАТЬ</button>
      </div>
      <div className='review__container_right'>
        <div className='review__slider'>
          <div className='review__slides'>
            <input type='radio' name='radio-btn' id='radio1' />
            <input type='radio' name='radio-btn' id='radio2' />
            <input type='radio' name='radio-btn' id='radio3' />
            <input type='radio' name='radio-btn' id='radio4' />
            <div className='review__slide review__slide-first'>
              <img src={bicycle1} alt='Фото велосипеда слайдера' />
            </div>
            <div className='review__slide'>
              <img src={bicycle2} alt='Фото велосипеда слайдера' />
            </div>
            <div className='review__slide'>
              <img src={bicycle3} alt='Фото велосипеда слайдера' />
            </div>
            <div className='review__slide'>
              <img src={bicycle4} alt='Фото велосипеда слайдера' />
            </div>
            <div className='review__navigation-auto'>
              <div className='review__auto-btn1'></div>
              <div className='review__auto-btn2'></div>
              <div className='review__auto-btn3'></div>
              <div className='review__auto-btn4'></div>
            </div>
          </div>
          <div className='review__navigation-manual'>
            <label for='radio1' className='review__manual-btn'></label>
            <label for='radio2' className='review__manual-btn'></label>
            <label for='radio3' className='review__manual-btn'></label>
            <label for='radio4' className='review__manual-btn'></label>
          </div>
        </div>
        <div className='review__table'>
          <div className='review__cell'>
            <h3 className='review__cell-heading'>до 100 км</h3>
            <p className='review__cell-text'>Запас хода</p>
          </div>
          <div className='review__cell'>
            <h3 className='review__cell-heading'>25 км/ч</h3>
            <p className='review__cell-text'>Макс корость</p>
          </div>
          <div className='review__cell'>
            <h3 className='review__cell-heading'>3 режима езды</h3>
            <p className='review__cell-text review__cell-text_margin'>механический, гибридный, электрический</p>
          </div>
          <div className='review__cell'>
            <h3 className='review__cell-heading'>25 кг</h3>
            <p className='review__cell-text'>вес</p>
          </div>
        </div>
      </div>
    </div>
  )
}
import './Slider.css';
import slider1 from '../../images/review-1.jpg';
import slider2 from '../../images/review-2.jpg';
import slider3 from '../../images/review-3.jpg';
import slider4 from '../../images/review-4.jpg';


export const Slider = () => {
  return (
    <section className='slider'>
      <div className='slider__container'>
        <div className='slider__slides'>
          <input type='radio' name='radio-slider-btn' id='radio-slider1' />
          <input type='radio' name='radio-slider-btn' id='radio-slider2' />
          <input type='radio' name='radio-slider-btn' id='radio-slider3' />
          <input type='radio' name='radio-slider-btn' id='radio-slider4' />
          <div className='slider__slide slider__slide-first'>
            <img src={slider1} alt='Фото велосипеда слайдера' />
          </div>
          <div className='slider__slide'>
            <img src={slider2} alt='Фото велосипеда слайдера' />
          </div>
          <div className='slider__slide'>
            <img src={slider3} alt='Фото велосипеда слайдера' />
          </div>
          <div className='slider__slide'>
            <img src={slider4} alt='Фото велосипеда слайдера' />
          </div>
          <div className='slider__navigation-auto'>
            <div className='slider__auto-btn1'></div>
            <div className='slider__auto-btn2'></div>
            <div className='slider__auto-btn3'></div>
            <div className='slider__auto-btn4'></div>
          </div>
        </div>
        <div className='slider__navigation-manual'>
          <label for='radio-slider1' className='slider__manual-btn'></label>
          <label for='radio-slider2' className='slider__manual-btn'></label>
          <label for='radio-slider3' className='slider__manual-btn'></label>
          <label for='radio-slider4' className='slider__manual-btn'></label>
        </div>
      </div>
    </section>
  )
}
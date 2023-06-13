import './About.css';
import aboutPhoto from '../../images/about-bicycle.jpg'

export const About = () => {
  return (
    <div className='about'>
      <img src={aboutPhoto} alt='Фото рассказа о велосипеде'  className='about__photo'/>
      <div className='about__container'>
        <div className='about__cell'>
          <h3 className='about__heading'>Комфорт и безопасность от HIMO</h3>
          <p className='about__text'>Электровелосипед HIMO C26 позволит вам быстро и с комфортом добраться до места работы или учебы и не привязываться к городскому транспорту. Велосипед обладает прочной конструкцией и внушительным запасом хода, чтобы стать надежным транспортным средством в современных городских условиях. Легкая и прочная рама, 26-дюймовые колеса и 7-ступенчатая система трансмиссии позволяют уверенно передвигаться не только по асфальтированному дорожному полотну, но и по сложной загородной трассе.</p>
        </div>
        <div className='about__cell'>
          <h3 className='about__heading'>Прочная и легкая рама</h3>
          <p className='about__text'>Рама HIMO C26 изготовлена из прочного и легкого алюминиевого сплава и отличается высокой надежностью, устойчивостью в аварийных ситуациях, превосходной управляемостью и комфортным передвижением по любой дороге.</p>
        </div>
        <div className='about__cell'>
          <h3 className='about__heading'>Комбинация режимов для увеличения запаса хода</h3>
          <p className='about__text'>Электровелосипед HIMO C26 обладает увеличенным запасом хода. Его аккумулятор емкостью 10000 мАч с интеллектуальной системой оптимизации энергопотребления позволяет проехать до 60 км на одном заряде в режиме электропривода. При использовании на некоторых участках пути физической силы дальность хода увеличивается до 100 км. Максимальная скорость передвижения HIMO C26 составляет 25 км/ч.</p>
        </div>
        <div className='about__cell'>
          <h3 className='about__heading'>Надежная трансмиссия</h3>
          <p className='about__text'>7-ступенчатая система трансмиссии обеспечивает плавное и точное переключение передач, удобное управление скоростью и надежность в работе. Переключая передачи, вы сможете с минимальными усилиями заехать на горку и безопасно скатиться вниз.</p>
        </div>
        <div className='about__cell'>
          <h3 className='about__heading'>Вся информация на ЖК-дисплее</h3>
          <p className='about__text'>Вся информация на ЖК-дисплее <br />
Большой информативный дисплей, вынесенный на рулевую стойку, отображает всю важную информацию о работе HIMO C26 в реальном времени. Вы сможете узнать актуальную скорость передвижения, уровень заряда или пройденный путь. Дисплей защищен от воздействия внешних факторов по стандарту IPX7 и не боится дождя и пыли.</p>
        </div>
        <div className='about__cell'>
          <h3 className='about__heading'>Удобное седло</h3>
          <p className='about__text'>Электровелосипед HIMO C26 укомплектован велосипедным седлом от известного бренда Selle Royal. Трехмерная гелевая структура седла обеспечивает оптимальную упругость и высокий комфорт во время езды.</p>
        </div>
      </div>
    </div>
  )
}
import './Specifications.css';

export const Specifications = () => {
  return (
    <section id='specifications' className='specifications'>
      <div className='specifications__container'>
        <h2 className='specifications__title'>xaрактеристики</h2>
        <div className='specifications__cell specifications__cell-general'>
          <h3 className='specifications__heading'>Общие</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-general'>
              <p className='specifications__heading_name'>Производитель</p>
              <p className='specifications__heading_name'>Вид</p>
              <p className='specifications__heading_name'>Колеса</p>
              <p className='specifications__heading_name'>Электропривод</p>
            </div>
            <div className='specifications__container_text specifications__container_text-general'>
              <p className='specifications__heading_text'>Xiaomi</p>
              <p className='specifications__heading_text'>взрослый, дорожный, городской, электровелосипед, алюминиевая рама</p>
              <p className='specifications__heading_text'>26, двойной алюминиевый обод</p>
              <p className='specifications__heading_text'>мотор 250W, разгон до 25 км/ч</p>
            </div>
          </div>  
        </div>
        <div className='specifications__cell specifications__cell-depreciation'>
          <h3 className='specifications__heading'>амортизация</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-depreciation'>
              <p className='specifications__heading_name'>Тип амортизации</p>
              <p className='specifications__heading_name'>Вилка</p>
            </div>
            <div className='specifications__container_text specifications__container_text-depreciation'>
              <p className='specifications__heading_text'>амортизирующая вилка (Hard tail)</p>
              <p className='specifications__heading_text'>пружинно-эластомерная</p>
            </div>
          </div>  
        </div>
        <div className='specifications__cell specifications__cell-management'>
          <h3 className='specifications__heading'>управление</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-management'>
              <p className='specifications__heading_name'>Руль</p>
              <p className='specifications__heading_name'>Манетки</p>
            </div>
            <div className='specifications__container_text specifications__container_text-management'>
              <p className='specifications__heading_text'>изогнутый, регулируемый подъем</p>
              <p className='specifications__heading_text'>триггерные однорычажные, Shimano</p>
            </div>
          </div>  
        </div>
        <div className='specifications__cell specifications__cell-transmissions'>
          <h3 className='specifications__heading'>характеристика трансмиссии</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-transmissions'>
              <p className='specifications__heading_name'>Количество скоростей</p>
              <p className='specifications__heading_name'>Педали</p>
              <p className='specifications__heading_name'>Передний переключатель</p>
              <p className='specifications__heading_name'>Задний переключатель</p>
              <p className='specifications__heading_name'>Кассета</p>
            </div>
            <div className='specifications__container_text specifications__container_text-transmissions'>
              <p className='specifications__heading_text'>7</p>
              <p className='specifications__heading_text'>классические</p>
              <p className='specifications__heading_text'>1 звезда</p>
              <p className='specifications__heading_text'>Shimano Tourney (прогулочный)</p>
              <p className='specifications__heading_text'>7 звезд</p>
            </div>
          </div>  
        </div>
        <div className='specifications__cell specifications__cell-brakes'>
          <h3 className='specifications__heading'>тормоза</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-brakes'>
              <p className='specifications__heading_name'>Передний</p>
              <p className='specifications__heading_name'>Задний</p>
              <p className='specifications__heading_name'>Готовность к установке дисковых</p>
            </div>
            <div className='specifications__container_text specifications__container_text-brakes'>
              <p className='specifications__heading_text'>дисковый механический</p>
              <p className='specifications__heading_text'>дисковый механический</p>
              <p className='specifications__heading_text'>рама, вилка, втулка </p>
            </div>
          </div>  
        </div>
        <div className='specifications__cell specifications__cell-other'>
          <h3 className='specifications__heading'>прочее</h3>
          <div className='specifications__table'>
            <div className='specifications__container_name specifications__container_name-other'>
              <p className='specifications__heading_name'>Оснащение</p>
              <p className='specifications__heading_name'>Вес</p>
            </div>
            <div className='specifications__container_text specifications__container_text-other'>
              <p className='specifications__heading_text'>электрооборудование, звонок</p>
              <p className='specifications__heading_text'>25 кг</p>
            </div>
          </div>  
        </div> 
      </div>
      <div className='specifications__photo'>
      </div>
    </section>
  )
}
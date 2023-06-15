import './Footer.css';
import instagram from '../../images/footer-instagram.svg';
import facebook from '../../images/footer-facebook.svg';
import telephone from '../../images/footer-telephone.svg';
import mail from '../../images/footer-mail.svg';

export const Footer = () =>{
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text footer__text_politic'>Политика конфиденциальности</p>
        <div className='footer__container-social'>
          <img className='footer__image-instagram footer__image_social' src={instagram} alt='Иконка instagram' />
          <img className='footer__image-facebook footer__image_social' src={facebook} alt='Иконка facebook' />
        </div>
        <div className='footer__container-contact'>
          <div className='footer__container-telephone'>
            <img className='footer__image-telephone' src={telephone} alt='Иконка телефона' />
            <p className='footer__text footer__text_telephone'>+38 050 677 77 77</p>
          </div>
          <div className='footer__container-mail'>
            <img className='footer__image-mail' src={mail} alt='Иконка почты' />
            <p className='footer__text footer__text_mail'>elektrobikeukr@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
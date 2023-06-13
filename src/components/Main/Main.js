import { About } from '../About/About';
import { Review } from '../Review/Review';
import { Specifications } from '../Specifications/Specifications';
import './Main.css';

export const Main = () => {
  return (
    <>
      <Review />
      <About />
      <Specifications />
    </>
  )
}
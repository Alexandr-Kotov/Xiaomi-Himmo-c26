import { About } from '../About/About';
import { Review } from '../Review/Review';
import { Specifications } from '../Specifications/Specifications';
import { Slider } from '../Slider/Slider';
import './Main.css';
import { Order } from '../Order/Order';

export const Main = () => {
  return (
    <>
      <Review />
      <About />
      <Specifications />
      <Slider />
      <Order />
    </>
  )
}
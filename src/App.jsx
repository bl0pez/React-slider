import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { data } from './data/data'
import { settings } from './helpers/configSlider';

import { Header } from './components/header/Header';
import { CardItem } from './components/card/CardItem';

function App() {

  return (
    <>

      <Header />

      <section className="content">
        <Slider {...settings}>
          {data.map((item) => (
            <CardItem key={item.id} item={item} />
          ))
          }
        </Slider>

      </section>
    </>
  )
}

export default App

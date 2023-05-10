import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <Carousel id='1' img={img1}></Carousel>
        <Carousel id='2' img={img2}></Carousel>
        <Carousel id='3' img={img3}></Carousel>
        <Carousel id='4' img={img4}></Carousel>
        <Carousel id='5' img={img5}></Carousel>
        <Carousel id='6' img={img6}></Carousel>
      </div>
    </div>
  );
};

export default Banner;

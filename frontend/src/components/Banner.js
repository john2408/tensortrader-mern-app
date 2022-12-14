import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from 'react-router-dom';


// Ref: http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base
export const Banner = () => {
  return (
    <Carousel autoPlay dynamicHeight={true} width="100%" showThumbs={false} infiniteLoop= {true} showStatus= {false}>
        <div>
            <a href="https://www.binance.com/en"><img alt="" src="banner/Binance.jpg" className='banner__img' ></img></a>
        </div>
        <div>
            <img alt="" src="banner/Cryptonews.png" className='banner__img'/>
        </div>
        <div>
            <img alt="" src="banner/Trading.jpg" className='banner__img'/>
        </div>
        
    </Carousel>
  )
}

export default Banner;

//<p className="banner__legend">Legend 1</p>  
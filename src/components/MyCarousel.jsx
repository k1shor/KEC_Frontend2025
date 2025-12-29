import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/lenovo.webp'
import img2 from '../assets/lenovo2.webp'

const MyCarousel = () => {
    return (
        <Carousel showArrows={false} showIndicators={false} showThumbs={false} autoPlay = {true}>
            <div>
                <img src="carousel/asus.webp" />
            </div>
            <div>
                <img src="carousel/dell1.webp" />
            </div>
            <div>
                <img src="carousel/dell2.webp" />
            </div>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
        </Carousel>
    )
}

export default MyCarousel
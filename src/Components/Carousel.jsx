import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Slide from './Slide';
import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'
const Carousel = () => {
    return (
        <div className='container py-10 mx-auto px-6 '>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={
                    {
                        delay: 4000,
                        disableOnInteraction: false,
                    }
                }
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><Slide image={img1} text='Get Your Development Projects Done in minutes' /></SwiperSlide>
                <SwiperSlide><Slide image={img2} text='Get Your Graphics Design Projects Done in minutes' /></SwiperSlide>
                <SwiperSlide><Slide image={img3} text='Get Your Digital Marketing Campaigns Up in running' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
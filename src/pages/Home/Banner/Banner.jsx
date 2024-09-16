import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div>
            <Swiper 
            navigation={true} 
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay, Navigation]} 
            className="mySwiper">
                <SwiperSlide>
                    <div className='min-h-screen bg-home-banner-bg-1 bg-no-repeat bg-cover bg-center text-center'>
                        <div className='w-full h-full bg-black bg-opacity-30'>
                            <div className='md:mx-52 lg:py-28 md:py-12'>
                                <h1 className='text-white text-5xl sm:text-7xl'>NEW CAMPING SEASON
                                    IS STARTING IN MAY!</h1>
                                <p className='text-white my-8'>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <PrimaryBtn>Enroll Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-screen bg-home-banner-bg-2 bg-no-repeat bg-cover bg-center text-center'>
                        <div className='w-full h-full bg-black bg-opacity-30'>
                            <div className='md:mx-52 lg:py-28 md:py-12'>
                                <h1 className='text-white text-5xl sm:text-7xl'>NEW CAMPING SEASON
                                    IS STARTING IN MAY!</h1>
                                <p className='text-white my-8'>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <PrimaryBtn>Enroll Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-screen bg-home-banner-bg-3 bg-no-repeat bg-cover bg-center text-center'>
                        <div className='w-full h-full bg-black bg-opacity-30'>
                            <div className='md:mx-52 py-12 lg:py-28 md:py-12'>
                                <h1 className='text-white text-5xl sm:text-7xl'>NEW CAMPING SEASON
                                    IS STARTING IN MAY!</h1>
                                <p className='text-white my-8'>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                                <PrimaryBtn>Enroll Now</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
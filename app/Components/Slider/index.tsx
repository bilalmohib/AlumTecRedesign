import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


// import required modules
import {
    EffectCube,
    Pagination,
    Autoplay,
    Navigation
} from "swiper";

function Slider() {
    return (
        <>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                speed={2000}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 1
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={
                    {
                        clickable: true,

                    }
                }
                navigation={true}
                modules={[EffectCube, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img style={{ height: 750 }} src="https://image.winudf.com/v2/image/Y29tLndEckFzaHJhZkFzaWZKYWxhbGlfNzU3NzA2NV9zY3JlZW5fMF8xNTM0NTg1OTAxXzA1NA/screen-0.jpg?h=500&fakeurl=1&type=.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: 750 }} src="https://s1.dmcdn.net/v/NYGcM1QyL2KziOr84/x1080" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: 750 }} src="https://s2.dmcdn.net/v/C1nAB1MD-uS1bbY9I/x1080" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: 750 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC3XsnqR2FZvjQHHmS-hGkD8s8B5OzY3KNQ&usqp=CAU" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ height: 750 }} src="https://c8.alamy.com/comp/E6B8T8/lahore-pakistan-19th-aug-2014-members-of-idara-sirat-e-mustaqeem-chant-E6B8T8.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Slider;

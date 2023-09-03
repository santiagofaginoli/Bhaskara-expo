import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Divider } from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const SwiperExplicacion = ({ children }) => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='grid grid-cols-1'>
                        <div className='flex justify-center align-middle w-full'>
                            <div className="max-w-full bg-[#20613f] md:p-5 rounded-3xl mx-auto">
                                <div className="w-full flex justify-center mb-5 ">
                                    <h2 className="text-4xl text-white text-center">¿Para que sirve bhaskara?</h2>
                                </div>
                                <Divider className='w-full mb-5'></Divider>
                                <video
                                    controls
                                    className="w-full"
                                    src="/img/explicacion1.mp4"
                                >
                                    Tu navegador no admite la reproducción de video.
                                </video>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1'>
                        <div className='flex justify-center align-middle w-full'>
                            <div className="max-w-full bg-[#20613f] md:p-5  rounded-3xl mx-auto">
                                <div className="w-full flex justify-center mb-5 ">
                                    <h2 className="text-4xl text-white text-center">¿Cual es la formula de Bhaskara?</h2>
                                </div>
                                <Divider className='w-full mb-5'></Divider>
                                <video
                                    controls
                                    className="w-full"
                                    src="/img/explicacion2.mp4"
                                >
                                    Tu navegador no admite la reproducción de video.
                                </video>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1'>
                        <div className='flex justify-center align-middle w-full'>
                            <div className="max-w-full bg-[#20613f] md:p-5  rounded-3xl mx-auto">
                                <div className="w-full flex justify-center mb-5 ">
                                    <h2 className="text-4xl text-white text-center">¿Como saber el valor de a,b y c ?</h2>
                                </div>
                                <Divider className='w-full mb-5'></Divider>
                                <video
                                    controls
                                    className="w-full"
                                    src="/img/explicacion3.mp4"
                                >
                                    Tu navegador no admite la reproducción de video.
                                </video>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1'>
                        <div className='flex justify-center align-middle w-full'>
                            <div className="max-w-full bg-[#20613f] md:p-5 rounded-3xl mx-auto">
                                <div className="w-full flex justify-center mb-5 ">
                                    <h2 className="text-4xl text-white text-center">¿Que hacemos con esos valores?</h2>
                                </div>
                                <Divider className='w-full mb-5'></Divider>
                                <video
                                    controls
                                    className="w-full"
                                    src="/img/explicacion4.mp4"
                                >
                                    Tu navegador no admite la reproducción de video.
                                </video>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default SwiperExplicacion
"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-flip";
import Image from 'next/image';
import Link from 'next/link';

export default function Doctorswipe() {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      // className="mySwiper"
      className="md:w-[80%] justify-center items-center"
    >
      <div className='flex justify-center items-center w-[100%]'>
      <SwiperSlide>
        <Link href='../doctors/John' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/1.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Jane' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/77.jpeg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/David'passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/3.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Sarah' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/4.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Michael' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/5.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Emily' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/6.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Andrew' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/7.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Olivia' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/8.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Matthew' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/9.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Sophia' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/10.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Daniel' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/11.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href='../doctors/Isabella' passHref>
        <Image src='https://github.com/itradebtc/doctorsimages/blob/main/1.jpg?raw=true' alt='kk' width={300} height={300} />
        </Link>
      </SwiperSlide>
      </div>
    </Swiper>
  )
}

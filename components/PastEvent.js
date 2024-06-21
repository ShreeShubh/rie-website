"use client"

import React, { useState, useEffect, useRef } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

function PastEvent() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])

  var settings2 = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <div className="slider-container w-full md:w-3/5 mx-auto p-4 mt-16 relative z-50">
      <h2 className="text-4xl md:text-5xl text-center mb-12">
        Past Event <span className="font-semibold">Gallery</span>
      </h2>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        {...settings}
      >
        <div className="text-center rounded-xl w-full">
          <Image
            src="/home/image2.jpg"
            width={1000}
            height={600}
            className="w-full rounded-xl"
          />
        </div>
        <div className="text-center rounded-xl">
          <Image
            src="/home/image2.jpg"
            width={1000}
            height={600}
            className="w-full rounded-xl"
          />
        </div>
        <div className="text-center rounded-xl">
          <Image
            src="/home/image3.jpg"
            width={1000}
            height={600}
            className="w-full rounded-xl"
          />
        </div>
        <div className="text-center rounded-xl">
          <Image
            src="/home/image4.jpg"
            width={1000}
            height={600}
            className="w-full rounded-xl"
          />
        </div>
        <div className="text-center rounded-xl">
          <Image
            src="/home/image2.jpg"
            width={1000}
            height={600}
            className="w-full rounded-xl"
          />
        </div>
        <div className="text-center rounded-xl">
          <Image
            src="/home/image2.jpg"
            width={1000}
            height={500}
            className="w-full rounded-xl"
          />
        </div>
      </Slider>
      {/* <h4>Second Slider</h4> */}
      <div className="text-center mx-auto py-2">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings2}
        >
          <div className="mr-4">
            <Image
              src="/home/image2.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
          <div className="mr-4">
            <Image
              src="/home/image2.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
          <div className="mr-4">
            <Image
              src="/home/image3.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
          <div className="mr-4">
            <Image
              src="/home/image4.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
          <div className="mr-4">
            <Image
              src="/home/image2.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
          <div className="mr-4">
            <Image
              src="/home/image2.jpg"
              width={195}
              height={110}
              className="rounded-xl"
            />
          </div>
        </Slider>
      </div>
      <Image
        src="/home/shapes2.svg"
        width={281}
        height={256}
        className="absolute -z-20 top-40 -left-10 transform transition-transform duration-300 hover:rotate-45"
      />

      <Image
        src="/home/shapes4.svg"
        width={281}
        height={256}
        className="absolute -z-20 top-1/2 -right-32 rotate-90 transform transition-transform duration-300 hover:rotate-45"
      />
    </div>
  )
}

export default PastEvent

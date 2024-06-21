"use client"

import Image from "next/image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

const Partners = () => {
  var settings = {
    dots: false,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="p-5 text-center md:mt-16 mt-12">
      <h3 className="text-[#EFEFEF] text-4xl md:text-5xl font-semibold">
        <Link href="/all-partner">Partners</Link>
      </h3>
      <div className="mt-14 w-10/12 md:ps-20 mx-auto">
        <Slider className="" {...settings}>
          <div>
            <Image
              src="/home/icici.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/home/virgin.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/home/godwitt.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/home/icici.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/home/virgin.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/home/godwitt.png"
              width={150}
              height={50}
              className="bg-white w-48 h-14 px-4 py-2 rounded-full"
            />
          </div>
        </Slider>
      </div>
      <hr className="w-3/5 mx-auto mt-12 md:mt-20 border-[#EFEFEF]" />
    </div>
  )
}

export default Partners

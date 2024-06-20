"use client"

import Image from "next/image"
import InsightSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"

const bannerImages = [
  {
    id: 1,
    imageUrl: "/home/banner1.png",
  },
  {
    id: 2,
    imageUrl: "/home/banner2.png",
  },
  {
    id: 3,
    imageUrl: "/home/banner3.png",
  },
  {
    id: 4,
    imageUrl: "/home/banner4.png",
  },
  {
    id: 5,
    imageUrl: "/home/banner5.png",
  },
  {
    id: 6,
    imageUrl: "/home/banner6.png",
  },
  {
    id: 7,
    imageUrl: "/home/banner7.png",
  },
]

const HomeBanner = () => {
  const sliderRef = useRef(null)

  var setting = {
    speed: 400,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex items-center justify-between gap-5 max-w-screen-xl p-4 mx-auto mt-6 relative">
      <div className="flex flex-col gap-5">
        <div>
          <Image src="/home/riemix.svg" width={400} height={150} alt="" />
          <p className="text-4xl font-semibold mt-2">January 9-12, 2025</p>
        </div>
        <div>
          <p className="text-3xl w-2/5">
            Immerse Yourself In a Multiverse of Creativity, Culture, and
            Community.
          </p>
          <button className="bg-custom-pink text-2xl px-4 py-2 text-white mt-8 hover:bg-white hover:text-black">
            Register
          </button>
        </div>
      </div>
      <div className="w-1/2 absolute right-0 top-auto">
        <InsightSlider ref={sliderRef} {...setting}>
          {bannerImages.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.imageUrl}
                  alt="banner"
                  className="w-full h-[450px]"
                />
              </div>
            )
          })}
        </InsightSlider>
      </div>
    </div>
  )
}

export default HomeBanner

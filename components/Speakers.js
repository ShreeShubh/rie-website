"use client"

import { speakersData } from "@/utils/data"
import SpeakersItem from "./SpeakersItem"
import InsightSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef, useState } from "react"

const Speakers = () => {
  const [showMore, setShowMore] = useState(false)
  const sliderRef = useRef(null)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  var setting = {
    speed: 400,
    slidesToShow: 5,
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="p-5 flex flex-col items-center gap-10 mt-16">
      <h2 className="text-[#EFEFEF] text-4xl md:text-5xl">
        This Year's<span className="font-semibold"> Speakers</span>
      </h2>
      <div className="space-y-5 text-center md:w-11/12 mx-auto">
        <p className="text-xl">
          EO believes that continuous learning and the exchange of ideas are
          essential for growth and innovation. RIEMIX will feature carefully
          curated sessions designed to blend diverse perspectives, innovative
          ideas, and practical knowledge to leave you inspired. Expect to
          {showMore && (
            <span>
              {" "}
              engage in a dynamic mix of interactive sessions, insightful talks,
              and thought-provoking discussions. Each session is an opportunity
              to reimagine concepts, explore new approaches, and RIEMIX your
              understanding in a way that sparks creativity and drives growth.
            </span>
          )}
        </p>

        {!showMore && (
          <button
            className="text-2xl underline px-4 py-2 text-white mt-4 md:hidden cursor-pointer"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}

        {showMore && (
          <>
            <p className="text-xl">
              Join us for a transformative journey where learning is all about
              RIEMIXING the old with the new to create something extraordinary.
              There is something for everyone.
            </p>
            <p className="text-xl">
              Stay tuned for our speaker announcements—you won’t want to miss
              the chance to hear from these extraordinary minds!
            </p>
          </>
        )}

        {showMore && (
          <button
            className="text-2xl underline px-4 py-2 text-white mt-4 md:hidden cursor-pointer"
            onClick={handleShowMore}
          >
            Show Less
          </button>
        )}
      </div>
      <div className="mt-5 w-full md:w-11/12 mx-auto">
        <InsightSlider ref={sliderRef} {...setting}>
          {speakersData.map((item) => (
            <SpeakersItem key={item.id} speakersDetails={item} />
          ))}
        </InsightSlider>
      </div>
    </div>
  )
}

export default Speakers

import RetreatItem from "@/components/RetreatItem"
import { retreatData } from "@/utils/data"
import React from "react"

const page = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex flex-col items-center max-w-screen-xl p-4 gap-7">
        <img src="/home/logo.png" className="h-8" alt="" />
        <p className="text-center md:text-xl md:w-4/5">
          At RIE 2024, we will help you connect with the soul of Bangalore –
          that’s what makes us want to keep coming back to the city.
        </p>
        <p className="text-center md:text-xl md:w-4/5">
          We have lined up an incredible range of MyEO experience for both
          embers and SLPs on 9 & 12 January, 2025. Whatever be your interests,
          we have something for everyone here.
        </p>
      </div>
      <h3 className="text-[#EFEFEF] text-4xl md:text-5xl my-8">
        Plan Your <span className="font-semibold">Retreat</span>
      </h3>
      <ul className="max-w-screen-xl p-4 grid gap-5 grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-5">
        {retreatData.map((item) => (
          <RetreatItem key={item.id} retreatDetails={item} />
        ))}
      </ul>
      <hr className="w-3/5 mx-auto mt-10 border-[#EFEFEF]" />
    </div>
  )
}

export default page

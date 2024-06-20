import WhatToExpect from "@/components/WhatToExpect"
import Team from "@/components/Team"
import React from "react"
import Schedule from "@/components/Schedule"

const page = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-col items-center gap-7 max-w-screen-xl p-4">
        <h3 className="text-[#EFEFEF] text-5xl font-semibold">What is RIE ?</h3>
        <p className="text-center w-3/4">
          RIE is not just another event. It is a meticulously curated experience
          designed to offer you exclusive and world-class learning and
          networking opportunities, including MyEO events.
        </p>
        <p className="text-center w-4/6">
          The diversity of sessions, speakers and groundbreaking concepts allow
          members to dive into innovative ideas to propel personal and
          professional growth. With xx chapters in India, xx from South Asia,
          and others from around the world, RIE is the platform to connect and
          network with like-minded individuals who are eager to collaborate and
          create friendships of a lifetime.
        </p>
        <WhatToExpect />
        <Team />
        <div className="w-full">
          <Schedule />
        </div>
      </div>
    </div>
  )
}

export default page

import { expectData } from "@/utils/data"
import TeamItems from "./TeamItems"

const WhatToExpect = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-10 p-5">
      <h2 className="text-[#EFEFEF] text-5xl">
        The <span className="font-semibold">Team</span>
      </h2>
      <p className="text-[#EFEFEF] text-xl text-center z-20">
        Never a dull moment planning a memorable RIE, with the creative and
        passionate crew behind RIE <br /> Bangalore. Tirelessly working to
        ensure every detail is thoughtfully planned, EO Bangalore team brings{" "}
        <br /> fresh and exciting energy to the event. You are guaranteed a
        unique experience. Get ready to connect, <br /> learn, and enjoy with a
        team that's all about making things happen. For you. Turn Up. Tune In.
      </p>
      <ul className="flex gap-8 mt-4 w-10/12 z-20">
        {expectData.map((item) => (
          <TeamItems expectDetails={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default WhatToExpect

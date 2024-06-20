import { expectData } from "@/utils/data"
import ExpectItem from "./ExpectItem"
import Image from "next/image"

const WhatToExpect = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-10 p-5">
      <h2 className="text-[#EFEFEF] text-5xl">
        What to <span className="font-semibold">Expect ?</span>{" "}
      </h2>
      <p className="text-[#EFEFEF] text-xl text-center">
        Gear up for three action-packed days of unmatched learning and
        invaluable insights. Our <br /> event brings together local and global
        chapters, fostering a unique blend of regional <br /> expertise and
        international perspectives. Whether you’re looking to expand your
        knowledge, <br /> build new connections, or reignite your passion, this
        event has it all.
      </p>

      <ul className="flex gap-8 mt-4 w-10/12 z-20 relative">
        {expectData.map((item) => (
          <ExpectItem expectDetails={item} key={item.id} />
        ))}
        <Image
          src="/home/ribbonLeft copy.png"
          width={300}
          height={919}
          className="absolute -left-[20%] top-5 z-0 overflow-hidden"
          alt=""
        />
      </ul>
    </div>
  )
}

export default WhatToExpect

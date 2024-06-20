import { partnerData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const page = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-col items-center max-w-screen-xl p-4 gap-14">
        <div className="flex flex-col items-center gap-7">
          <h3 className="text-4xl font-semibold">Partners</h3>
          <ul className="flex justify-center flex-wrap gap-7 w-full">
            {partnerData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-center items-center bg-white w-48 h-14 rounded-full"
                >
                  <Image
                    src={item.logoUrl}
                    width={125}
                    height={32}
                    className=""
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-7">
          <h3 className="text-4xl font-semibold">Sponsors</h3>
          <ul className="flex justify-center flex-wrap gap-7 w-full">
            {partnerData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-center items-center bg-white w-48 h-14 rounded-full"
                >
                  <Image
                    src={item.logoUrl}
                    width={125}
                    height={32}
                    className=""
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <hr className="w-3/5 mx-auto mt-10 border-[#EFEFEF]" />
      </div>
    </div>
  )
}

export default page

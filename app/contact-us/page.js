import { contactData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const page = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col items-center max-w-screen-xl p-4 gap-10">
        <h3 className="text-[#EFEFEF] text-5xl font-semibold">Meet Us At</h3>
        <ul className="flex justify-center flex-wrap w-full gap-16 mt-10">
          {contactData.map((item) => {
            return (
              <li key={item.id} className="flex items-start gap-4 w-80">
                <Image src={item.icon} width={35} height={42} alt="" />
                <div className="flex flex-col">
                  <span className="text-xl">{item.desc1}</span>
                  <span className="text-xl">{item.desc2}</span>
                </div>
              </li>
            )
          })}
        </ul>
        <hr className="w-3/5 mx-auto mt-10 border-[#EFEFEF]" />
      </div>
    </div>
  )
}

export default page

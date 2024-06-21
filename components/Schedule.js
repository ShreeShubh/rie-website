import Image from "next/image"

const Schedule = () => {
  return (
    <div className="p-2 md:p-5 flex flex-col items-center gap-10 mt-16">
      <h2 className="text-[#EFEFEF] text-3xl  md:text-5xl">
        {" "}
        <span className="font-semibold">Schedule</span> at a Glance
      </h2>
      <div className="schedule-card-1 rounded-2xl p-2 md:p-4 w-full md:w-3/4 z-20">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Date
            </p>
            <p>January 09, 2025</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Time
            </p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Event
            </p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
          </div>
        </div>
      </div>

      <div className="schedule-card-2 rounded-2xl p-2 md:p-4 w-full md:w-3/4 z-20">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Date
            </p>
            <p>January 09, 2025</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Time
            </p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Event
            </p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
          </div>
        </div>
      </div>

      <div className="schedule-card-3 rounded-2xl p-2 md:p-4 w-full md:w-3/4 relative">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Date
            </p>
            <p>January 09, 2025</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Time
            </p>
            <p>11.00 - 17.00</p>
            <p>11.00 - 17.00</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="w-40 flex justify-center py-1 rounded-3xl bg-[#EFEFEF] text-black text-xl">
              Event
            </p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
            <p className="border-b pb-1">Specially curated MyEO experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule

{
  /* <Image
          src="/home/aboutSnake.svg"
          width={300}
          height={919}
          className="absolute -right-[29%] top-10 z-0 overflow-hidden"
          alt=""
        /> */
}

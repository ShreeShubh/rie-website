import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col gap-14 items-center mt-28 p-5">
      <h2 className="text-[#EFEFEF] text-5xl">
        About <span className="font-semibold">RIE</span>{" "}
      </h2>
      <div className="w-3/4 relative">
        <div className="w-full h-[600px] shadow-customAbout shadow-indigo-500/50 rounded-md custom-about-shadow z-auto"></div>
        <Image
          src="/home/aboutSnake.svg"
          width={300}
          height={919}
          className="absolute -right-[29%] top-40 z-0 overflow-hidden"
          alt=""
        />
      </div>
    </div>
  )
}

export default About

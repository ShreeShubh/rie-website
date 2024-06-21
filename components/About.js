import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col gap-14 items-center mt-28 p-5">
      <h2 className="text-[#EFEFEF] text-5xl font-[100]">
        About <span className="font-semibold">RIE</span>
      </h2>
      <div className="w-full md:w-3/5 relative">
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md shadow-customAbout shadow-indigo-500/50 custom-about-shadow z-50">
          <iframe
            src="https://docs.rie2025.com/wp-content/uploads/2024/06/cloud-document.mp4"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Image
          src="/home/aboutSnake.svg"
          width={300}
          height={919}
          className="absolute -right-[35%] top-40 z-0 overflow-hidden hidden md:block"
          alt=""
        />
      </div>
    </div>
  )
}

export default About

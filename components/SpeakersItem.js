import Image from "next/image"

const SpeakersItem = ({ speakersDetails }) => {
  const { name, title, imageUrl1, bgColor } = speakersDetails
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="md:w-[200px] w-auto h-64 md:h-[275px] m-2 pt-7 px-2 md:px-4 rounded-2xl flex flex-col justify-between group"
    >
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{title}</p>
      </div>
      <div className="overflow-hidden">
        <Image
          src={imageUrl1}
          width={100}
          height={100}
          className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          alt=""
        />
      </div>
    </div>
  )
}

export default SpeakersItem

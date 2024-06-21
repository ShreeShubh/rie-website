import Image from "next/image"

const SpeakersItem = ({ speakersDetails }) => {
  const { name, title, imageUrl1, bgColor } = speakersDetails
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="md:w-[200px] w-44 h-[275px] pt-7 px-4 rounded-2xl flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{title}</p>
      </div>
      <Image
        src="/home/amitabh.png"
        width={100}
        height={100}
        className="w-full"
        alt=""
      />
    </div>
  )
}

export default SpeakersItem

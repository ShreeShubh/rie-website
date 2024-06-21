import { rightArrow } from "@/utils/icon"

const ExpectItem = ({ expectDetails }) => {
  const { bgColor, title, desc } = expectDetails

  return (
    <li
      style={{ backgroundColor: bgColor }}
      className={`border border-[#EFEFEF] h-[185px] md:h-[250px] rounded-2xl p-2 md:p-5 flex flex-col gap-2 justify-between group relative overflow-hidden cursor-pointer w-full sm:w-auto z-20`}
    >
      <span className="text-xl md:text-2xl md:w-1/2 z-10">{title}</span>
      <p className="hidden text-xs md:text-base group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        {desc}
      </p>
      <span className="self-end text-3xl transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
        {rightArrow}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
    </li>
  )
}

export default ExpectItem

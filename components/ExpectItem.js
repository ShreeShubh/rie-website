import { rightArrow } from "@/utils/icon"

const ExpectItem = ({ expectDetails }) => {
  const { bgColor, title, desc } = expectDetails

  return (
    <li
      style={{ backgroundColor: bgColor }}
      className={`border border-[#EFEFEF] rounded-2xl p-5 flex flex-col gap-2 justify-between w-[280px] h-[260px] group relative overflow-hidden cursor-pointer z-20`}
    >
      <p className="text-2xl w-1/2 z-10">{title}</p>
      <p className="hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
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

import { rightArrow } from "@/utils/icon"

const ExpectItem = ({ expectDetails }) => {
  const { bgColor, title } = expectDetails

  return (
    <li
      style={{ backgroundColor: bgColor }}
      className={`border border-[#EFEFEF] rounded-2xl p-5 flex flex-col gap-2 justify-between w-[280px] h-[260px]`}
    >
      <p className="text-2xl w-1/2">{title}</p>
      <span className="self-end text-3xl">{rightArrow}</span>
    </li>
  )
}

export default ExpectItem

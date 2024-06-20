import React from "react"

const RetreatItem = ({ retreatDetails }) => {
  const { imageUrl, bgColor, category, desc } = retreatDetails

  return (
    <div
      className="relative rounded-xl border-2 border-white flex flex-col justify-end p-5 w-[250px] h-[300px] bg-cover group cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-5 left-5">
        <span
          className="px-4 py-1.5 rounded-3xl text-sm"
          style={{ backgroundColor: bgColor }}
        >
          {category}
        </span>
      </div>
      <div
        className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
        style={{
          background: `linear-gradient(to top, ${bgColor}99, ${bgColor}00)`,
        }}
      >
        <p className="text-white">{desc}</p>
      </div>
    </div>
  )
}

export default RetreatItem

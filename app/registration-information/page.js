"use client"

import { accordionItems, faqsItems, tabs } from "@/utils/data"
import React, { useState } from "react"
import AccordionMenu from "@/components/AccordionMenu"
import TabContent from "@/components/TabContent"
import FaqsMenu from "@/components/FaqsMenu"

const page = () => {
  const [expandedItem, setExpandedItem] = useState(null)
  const [expandedFaqs, setExpandedFaqs] = useState(null)
  const [activeTab, setActiveTab] = useState("Visa")

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  const toggleExpandFaqs = (id) => {
    setExpandedFaqs(expandedFaqs === id ? null : id)
  }

  return (
    <div className="max-w-screen-xl mt-6 p-4 mx-auto">
      <div className="flex flex-col items-center w-full gap-5">
        <div className="text-center space-y-2">
          <h3 className="text-5xl font-semibold">Plan your Trip</h3>
          <h5 className="text-2xl">Registration Information</h5>
        </div>
        <div className="w-full p-2 rounded-xl bg-[#2DAA8C]">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="space-y-2"
          >
            {accordionItems.map((item) => (
              <AccordionMenu
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isExpanded={expandedItem === item.id}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </div>
        <h3 className="text-5xl font-semibold mt-10">Travel & Visa Guide</h3>
        <div className="w-full p-2 rounded-xl bg-[#2DAA8C] mt-2">
          <div className="flex">
            <ul className="flex flex-col w-48 space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer p-2 ${
                    activeTab === tab ? "bg-red-400 text-white" : ""
                  } rounded-lg`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <div className="ml-6 p-6 w-full bg-[#2DAA8C] rounded-lg">
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
        <h3 className="text-5xl font-semibold mt-10">FAQs</h3>
        <div className="w-full p-2 rounded-xl bg-[#2DAA8C] mt-2">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="space-y-2"
          >
            {faqsItems.map((item) => (
              <FaqsMenu
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isExpanded={expandedFaqs === item.id}
                toggleExpand={toggleExpandFaqs}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

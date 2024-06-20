import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeBanner from "@/components/HomeBanner"
import Partners from "@/components/Partners"
import PastEvent from "@/components/PastEvent"
import Schedule from "@/components/Schedule"
import Speakers from "@/components/Speakers"
import WhatToExpect from "@/components/WhatToExpect"

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-blue text-white p-7">
      <HomeBanner />
      <About />
      <WhatToExpect />
      <Schedule />
      <Speakers />
      <PastEvent />
      <Partners />
    </main>
  )
}

import {
  appStore,
  facebook,
  googlePlay,
  instagram,
  linkedIn,
} from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-custom-blue text-white mt-8">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto p-4">
        <Image src="/home/riemix.svg" width={250} height={100} alt="" />
        <div className="flex justify-between w-full items-center mt-12">
          <p className="text-xl">Contact us at: rie@eobangalore.com</p>
          <div className="flex gap-4">
            <span className="text-xl">{appStore}</span>
            <span className="text-xl">{googlePlay}</span>
            <span className="text-xl">{facebook}</span>
            <span className="text-xl">{instagram}</span>
            <span className="text-xl">{linkedIn}</span>
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-5">
          <ul className="flex flex-wrap justify-center text-sm text-gray-300">
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <Link href="/contact-us" className="hover:text-white">
                CONTACT US
              </Link>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <a href="#" className="hover:text-white">
                EVENT WAIVER
              </a>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <a href="#" className="hover:text-white">
                PRIVACY POLICY
              </a>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <a href="#" className="hover:text-white">
                TERMS OF USE
              </a>
            </li>
            <li className="after:content-['|'] after:px-2 last:after:content-['']">
              <a href="#" className="hover:text-white">
                CANCELLATION POLICY
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-300">© Copyright 2024</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

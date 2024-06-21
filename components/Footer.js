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
    <div className="bg-custom-blue text-white md:mt-8">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto p-4">
        <Image src="/home/riemix.svg" width={250} height={100} alt="" />
        <div className="flex flex-col md:flex-row justify-between w-full">
          <p className="text-xl mt-6 text-center">
            Contact us at: rie@eobangalore.com
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <span className="text-xl">{appStore}</span>
            <span className="text-xl">{googlePlay}</span>
            <span className="text-xl">{facebook}</span>
            <span className="text-xl">{instagram}</span>
            <span className="text-xl">{linkedIn}</span>
          </div>
        </div>
        <div className="w-full mt-8 flex flex-col md:flex-row justify-between">
          <ul className="flex flex-wrap justify-center text-sm text-gray-300 mb-4">
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
          <span className="block text-center text-sm text-gray-300">
            © Copyright 2024
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer

import Image from "next/image"
import Bg from "@/public/announcement3.png"
import { announcement } from "."

const page = () => {
  return (
    <section>
      <div className="w-full min-h-screen h-full flex flex-col bg-[#4E2865] items-center">
        <Image 
            src={Bg}
            alt="Bg"
            className="w-full pb-20"
        />
        {announcement.map((data, i) => (
            <div key={i} className="w-[80%] bg-gradient-to-b from-[#CF9FC8] to-[#A74899] rounded-2xl border-[3px] border-white overflow-hidden mb-10 p-7 md:p-10">
                <h1 className="text-base md:text-lg text-white font-[700]"> {data.title} </h1>
                <p className="text-xs md:text-base text-white font-[500]"> {data.description} </p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default page

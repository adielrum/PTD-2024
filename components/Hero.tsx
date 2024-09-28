import Image from "next/image";
import Star from "@/public/STAR TEXTURES 1.svg"
import Title from "@/public/Pendidikan Tingkat Dasar KSEP 2024.svg"
import Dadu from "@/public/DADU alt 1 1.svg"
import Pawn from "@/public/PAWN 4 1.svg"
import Rail1 from "@/public/Uler tangga tp straight 1.svg"
import Rail2 from "@/public/Uler tangga tp straight 2.svg"

const Hero = () => {
  return (
    <section>
      <div className='min-h-screen h-full bg-gradient-to-br from-[#ED422E] to-[#FE9110] relative overflow-x-hidden flex flex-col items-center justify-center'>
        <p className="text-white text-xl z-20 pb-10 text-center"> ITB’s Kelompok Studi Ekonomi dan Pasar Modal Present </p>
        <Image src={Title} alt="Title" className="z-20"/>
        <p className="bg-white px-7 py-2 rounded-full text-[#B91A19] mt-10 text-lg z-20"> Boarding Journey to Riches! </p>
        
        {/* Star Texture */}
        <div className="absolute bottom-0 flex z-0">
            <Image
            src={Star}
            alt="Star"
            />
            <Image
            src={Star}
            alt="Star"
            />
        </div>

        <Image 
        src={Rail1}
        alt="Rail"
        className="z-10 absolute left-0 top-0"
        />
        <Image 
        src={Rail2}
        alt="Rail"
        className="z-10 absolute right-0 bottom-0"
        />
        <Image 
        src={Dadu}
        alt="Dadu"
        className="z-10 absolute left-0 bottom-0"
        />
        <Image 
        src={Pawn}
        alt="Pawn"
        className="z-10 absolute top-20 right-0"
        />

      </div>
    </section>
  )
}

export default Hero

import Image from "next/image"
import sampleposter from "@/components/images/sample-poster.jpeg"


export const EventSection = () => {
    return <div className="flex flex-col gap-[24px] ml-[170px] mt-[100px] ">
        <div className="font-inter text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5] ">
                    UPCOMING EVENTS
        </div>
        <div className="flex gap-[24px]">
            <Image
        src={sampleposter}
        alt="sampleposter"
        className="  rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
        height={396}
        width={280}

        />
        <Image
        src={sampleposter}
        alt="sampleposter"
        className="  rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
        height={396}
        width={280}

        />
        <Image
        src={sampleposter}
        alt="sampleposter"
        className="  rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
        height={396}
        width={280}

        />
        <Image
        src={sampleposter}
        alt="sampleposter"
        className="  rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
        height={396}
        width={280}

        />
        </div>
        
    </div>
}
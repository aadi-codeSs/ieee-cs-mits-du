import Image from "next/image"
import sampleposter from "@/components/images/sample-poster.jpeg"

export const EventSection = () => {
    return (
        // CHANGED: removed ml-[170px], added responsive centering, padding, and top margin
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-[24px] mt-[60px] md:mt-[80px] lg:mt-[100px]">
            <div className="font-inter text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5]">
                UPCOMING EVENTS
            </div>

            {/* CHANGED: added flex-wrap, responsive gap, and centering for wrapped state */}
            <div className="flex flex-wrap gap-[24px] justify-center lg:justify-start">
                <Image
                    src={sampleposter}
                    alt="sampleposter"
                    className="rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[266px] h-auto"
                    height={376}
                    width={266}
                />
                <Image
                    src={sampleposter}
                    alt="sampleposter"
                    className="rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[266px] h-auto"
                    height={376}
                    width={266}
                />
                <Image
                    src={sampleposter}
                    alt="sampleposter"
                    className="rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[266px] h-auto"
                    height={376}
                    width={266}
                />
                <Image
                    src={sampleposter}
                    alt="sampleposter"
                    className="rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl w-full sm:w-[calc(50%-12px)] lg:w-[266px] h-auto"
                    height={376}
                    width={266}
                />
            </div>
        </div>
    )
}
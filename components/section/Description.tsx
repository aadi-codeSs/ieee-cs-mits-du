import descriptionImage from "@/components/images/about_image.svg"
import Image from "next/image"

export const Description = () => {
    return (
        <div className="
            flex flex-col lg:flex-row
            ml-0 lg:ml-[170px]
            mt-10 lg:mt-[150px]
            gap-8 lg:gap-36
            px-4 sm:px-6 lg:px-0
        ">
            {/* IMAGE */}
            <div className="relative z-10 flex items-center justify-center w-full lg:w-auto">
                <div className="group relative w-full lg:w-[525px]
                    rounded-2xl lg:rounded-none
                    shadow-[0_8px_32px_0_rgba(10,42,74,0.13)] lg:shadow-none
                    overflow-hidden
                ">
                    <Image
                        src={descriptionImage}
                        alt="IEEE Computer Society — MITS Student Branch Chapter"
                        height={50}
                        width={525}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 525px"
                        className="object-cover w-full h-auto transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105 group-hover:drop-shadow-xl"
                        priority
                    />
                </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col
                gap-4 lg:gap-[42px]
                mr-0 lg:mr-[135px]
            ">
                <div className="font-inter text-[24px] lg:text-[28px] font-[700] text-[#0A2A4A] tracking-[-1.3]
                    leading-[1.25] lg:leading-none
                ">
                    About IEEE Computer Society Chapter
                </div>
                <div className="font-inter font-[600] text-[15px] lg:text-[16px] tracking-[-0.5]
                    leading-[1.8] lg:leading-[1.5]
                    text-[#333333]
                ">
                    The IEEE Computer Society is the world's leading membership organization dedicated to computer science and technology. Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students. The IEEE Computer Society Kerala Chapter has 145 professional members and 2051 student members. Winner of IEEE CS(Global) Outstanding Chapter Award 2018 and Early Career Professionals Engagement in Outstanding Chapter Award Program 2022.
                </div>
            </div>
        </div>
    )
}
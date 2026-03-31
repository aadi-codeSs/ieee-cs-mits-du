import Button from "../generic/Button"
import Image from "next/image"
import heroImage from "@/components/images/fronted_battle.svg"

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col lg:flex-row
            gap-8 lg:gap-[56px]
            mx-0 lg:mx-[170px]
            px-4 sm:px-6 lg:px-0
            mt-10 sm:mt-20 lg:mt-[130px]
            overflow-x-hidden lg:overflow-x-visible
        ">

            {/* IMAGE — appears first on mobile */}
            <div
                className="order-1 lg:order-2 relative z-10 flex items-center justify-center w-full lg:w-auto
                    opacity-0 animate-[fadeSlideLeft_0.7s_ease_forwards_0.3s]
                    lg:translate-x-6 lg:animate-[fadeSlideLeft_0.7s_ease_forwards_0.3s]"
            >
                <div className="group relative w-full lg:w-[525px]
                    rounded-2xl lg:rounded-none
                    shadow-[0_8px_32px_0_rgba(10,42,74,0.13)] lg:shadow-none
                    overflow-hidden
                ">
                    <Image
                        src={heroImage}
                        alt="IEEE Computer Society — MITS Student Branch Chapter"
                        height={50}
                        width={525}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 525px"
                        className="object-cover w-full h-auto
                            transition-all duration-500 ease-out
                            group-hover:scale-[1.03] group-hover:brightness-105 group-hover:drop-shadow-xl"
                        priority
                    />
                </div>
            </div>

            {/* TEXT CONTENT — appears below image on mobile */}
            <div className="order-2 lg:order-1 flex flex-col
                gap-5 lg:gap-[42px]
                z-10 flex-1
                pt-1 lg:pt-0
            ">
                {/* Heading */}
                <div className="flex flex-col leading-[1.15] lg:leading-none gap-0">
                    <div
                        className="font-inter text-[28px] sm:text-[32px] lg:text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5]
                            opacity-0 translate-y-4 animate-[fadeSlideUp_0.6s_ease_forwards_0.1s]"
                    >
                        Build. Innovate.
                    </div>
                    <div
                        className="font-inter text-[28px] sm:text-[32px] lg:text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5]
                            opacity-0 translate-y-4 animate-[fadeSlideUp_0.6s_ease_forwards_0.25s]"
                    >
                        Lead with IEEE Computer Society.
                    </div>
                </div>

                {/* Description */}
                <div
                    className="font-inter font-[600] text-[15px] sm:text-[16px] tracking-[-0.6]
                        w-full max-w-[530px]
                        leading-[1.75] lg:leading-[1.5]
                        text-[#333333]
                        opacity-0 translate-y-4 animate-[fadeSlideUp_0.6s_ease_forwards_0.4s]"
                >
                    Inspired by MIT's vision of shaping world-class engineers, the IEEE Computer Society Student Chapter fosters innovation, research, and collaboration in the evolving world of computing.
                </div>

                {/* Buttons */}
                <div
                    className="flex gap-[18px] pb-1
                        opacity-0 translate-y-4 animate-[fadeSlideUp_0.6s_ease_forwards_0.55s]
                        w-full lg:w-auto
                    "
                >
                    <Button
                        text="Join Us"
                        bgColor="#FFC72C"
                        textColor="#0A2A4A"
                        fontSize="14px"
                        height="40px"
                        width="102px"
                        className="font-inter tracking-[-1] flex-1 lg:flex-none lg:w-[102px]"
                        hoverBgColor="#0A2A4A"
                        hoverTextColor="#ffffff"
                    />
                    <Button
                        text="Learn More"
                        bgColor="#FFC72C"
                        textColor="#0A2A4A"
                        fontSize="14px"
                        height="40px"
                        width="102px"
                        className="font-inter tracking-[-1] flex-1 lg:flex-none lg:w-[102px]"
                        hoverBgColor="#0A2A4A"
                        hoverTextColor="#ffffff"
                    />
                </div>
            </div>

        </div>
    )
}
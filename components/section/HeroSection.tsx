import Button from "../generic/Button"

export const HeroSection = () => {
    return <div className="flex flex-col gap-[42px] ml-[170px] mt-[130px] ">
        <div className="flex flex-col leading-none ">
                <div className="font-inter text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5] ">
                    Build. Innovate.
                </div>
                <div className="font-inter text-[36px] font-[700] text-[#0A2A4A] tracking-[-1.5] ">
                    Lead with IEEE Computer Society.
                </div>
        </div>
        <div className="font-inter font-[600] text-[16px] tracking-[-0.6] w-[530px] leading-[1.5] text-[#333333] ">
            Inspired by MIT’s vision of shaping world-class engineers, the IEEE Computer Society Student Chapter fosters innovation, research, and collaboration in the evolving world of computing.
        </div>

        <div className=" flex gap-[18px]">
            <Button
            text="Join Us"
            bgColor="#FFC72C"
            textColor="#0A2A4A"
            fontSize="14px"
            height="40px"
            width="102px"
            className="font-inter tracking-[-1]"
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
            className="font-inter tracking-[-1]"
            hoverBgColor="#0A2A4A"
            hoverTextColor="#ffffff"
            
            />
           
        </div>
                
    </div>
}
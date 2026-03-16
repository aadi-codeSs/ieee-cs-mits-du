import Card from "../generic/Card"
import earthlogo from "@/components/images/earthlogo.svg"
import awardlogo from "@/components/images/awardlogo.svg"
import mentorlogo from "@/components/images/mentor.svg"
import eventlogo from "@/components/images/eventlogo.svg"

export const CardSection = () => {
    return <div className="flex gap-[36px] ml-[170px] mt-[150px]">
        <Card
            logoSrc={earthlogo}
            headingText = "Student Branches"
            descriptionText="There are thousands of IEEE Student Branches throughout the world and likely one near you. It's your connection to local professionals."
            backgroundColor="#E1E5EA"
            headingColor="#00629B"
            descriptionColor="#333333"
            headingFont="inter"
            descriptionFont="inter"
            headingTracking="-0.045em"
            descriptionTracking="-0.025em"
            

        />
        <Card
            logoSrc={eventlogo}
            headingText = "Events"
            descriptionText="IEEE Computer Society Kerala Chapter organises workshops, hackathons, and seminars, connecting students with experts and peers."
            backgroundColor="#E1E5EA"
            headingColor="#00629B"
            descriptionColor="#333333"
            headingFont="inter"
            descriptionFont="inter"
            headingTracking="-0.045em"
            descriptionTracking="-0.025em"
            

        />
        <Card
            logoSrc={awardlogo}
            headingText = "Funds & Awards"
            descriptionText="IEEE provides grants, scholarships, and awards, recognizing excellence and supporting student initiatives, research, and leadership."
            backgroundColor="#E1E5EA"
            headingColor="#00629B"
            descriptionColor="#333333"
            headingFont="inter"
            descriptionFont="inter"
            headingTracking="-0.045em"
            descriptionTracking="-0.025em"
            

        />
        <Card
            logoSrc={mentorlogo}
            headingText = "Mentoring Support"
            descriptionText="Experienced professionals and academics guide students, offering career advice, skill development, networking opportunities."
            backgroundColor="#E1E5EA"
            headingColor="#00629B"
            descriptionColor="#333333"
            headingFont="inter"
            descriptionFont="inter"
            headingTracking="-0.045em"
            descriptionTracking="-0.025em"
            

        />
    </div>
}
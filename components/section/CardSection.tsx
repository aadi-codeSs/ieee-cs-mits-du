import Card from "../generic/Card"
import earthlogo from "@/components/images/earthlogo.svg"
import awardlogo from "@/components/images/awardlogo.svg"
import mentorlogo from "@/components/images/mentor.svg"
import eventlogo from "@/components/images/eventlogo.svg"

export const CardSection = () => {
    return (
        // CHANGED: removed ml-[170px], added responsive centering, padding, wrapping, margin, and gap
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-wrap gap-[24px] lg:gap-[36px] mt-[60px] md:mt-[100px] lg:mt-[150px] justify-center lg:justify-start">
            <Card
                logoSrc={earthlogo}
                headingText="Student Branches"
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
                headingText="Events"
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
                headingText="Funds & Awards"
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
                headingText="Mentoring Support"
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
    )
}
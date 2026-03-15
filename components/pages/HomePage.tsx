import Footer from "../generic/Footer"
import { CardSection } from "../section/CardSection"
import { Description } from "../section/Description"
import { EventSection } from "../section/EventSection"
import { HeroSection } from "../section/HeroSection"

export const HomePage = () => {
    return <div>
        <HeroSection/>
        <Description/>
        <CardSection/>
        <EventSection/>

    </div>
}
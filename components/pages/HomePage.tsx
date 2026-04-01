import { CardSection } from "../section/CardSection"
import { Description } from "../section/Description"
import { HeroSection } from "../section/HeroSection"

export const HomePage = () => {
    return <div>
        <HeroSection/>
        <Description/>
        <CardSection/>
    </div>
}
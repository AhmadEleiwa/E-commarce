import { Container } from "@mui/system"
import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
const HomePage = props => {
    return <Container maxWidth={'xl'}>
        <HeroSection />
        <Banner title="Test" />
    </Container>
}

export default HomePage
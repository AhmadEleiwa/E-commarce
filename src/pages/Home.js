import { Container } from "@mui/system"
import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import Testimg from './test.png'
const HomePage = props => {
    return <Container maxWidth={'xl'}>
        <HeroSection />
        <Banner title="Test" img={Testimg} />
    </Container>
}

export default HomePage
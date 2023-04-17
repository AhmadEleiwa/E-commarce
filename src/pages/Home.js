import { Container } from "@mui/system"
import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import Testimg from './test.png'
import FlashSaleComponent from "../components/FlashSaleComponent"
import ExploreProducts from "../components/ExploreProducts"
import { Box } from "@mui/system"
const HomePage = props => {
    return <Container maxWidth={'xl'}  >

        <HeroSection />
        <FlashSaleComponent />
        <ExploreProducts />
        {/* best sel */}
        {/* Related */}
        <Banner title="Test" img={Testimg} />





    </Container>
}

export default HomePage
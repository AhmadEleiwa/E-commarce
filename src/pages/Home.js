import { Container } from "@mui/system"
import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import Testimg from './test.png'
import FlashSaleComponent from "../components/FlashSaleComponent"
import ExploreProducts from "../components/ExploreProducts"
import BestSellingProduct from "../components/BestSellingProducts"
import RelatedItemSection from "../components/RelatedItemSection"
import { Box } from "@mui/system"
const HomePage = props => {
    return <Container maxWidth={'xl'}  >

        <Box display={'flex'} flexDirection={'column'} gap={'4em'} sx={{margin :'2em'}}>
            <HeroSection />
            <FlashSaleComponent />
            <ExploreProducts />
            <BestSellingProduct />
            <RelatedItemSection />
            <Banner title="Test" img={Testimg} />


        </Box>



    </Container>
}

export default HomePage
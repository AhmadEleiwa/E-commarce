import { Container } from "@mui/system"
import DetailsOfProduct from '../components/DetailsOfProduct/DetailsOfProduct'
import RelatedItemSection from '../components/RelatedItemSection'
const ProductDetailsPage = props => {
    return <Container maxWidth={'xl'}  >
        <DetailsOfProduct />
        <RelatedItemSection />
    </Container>
}

export default ProductDetailsPage
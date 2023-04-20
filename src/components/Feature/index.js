import { BusAlert, Headphones, SafetyCheck } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"

import Item from "../HeroSection/RightSide/item"
import SubTitle from "../SubTitle"
import Title from "../Title"
import FeaturedCard from "./FeatureCard"
import FeatureItem from "./FeatureItem"
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'

import './style.css'
const Feature = props => {
    return <Box  className ={'feature-container'} sx={{width:'100%'}}>
        <div>
            <SubTitle>Featured</SubTitle>
            <Title>New Arrival</Title>
        </div>
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'}gap='1em'>
            <FeaturedCard img={img4} title={'PlayStation 5'} center description={'Black and White version of the PS5 coming out on sale.'} />
            <Box display={'grid'} gap='1em' >
                <FeaturedCard img={img3} title={'PlayStation 5'} description={'Black and White version of the PS5 coming out on sale.'} />

                <Box display={"grid"} gridTemplateColumns={'1fr 1fr'} gap='1em'>
                    <FeaturedCard img={img1} center title={'PlayStation 5'} description={'Black and White version of the PS5 coming out on sale.'} />
                    <FeaturedCard img={img2} center title={'PlayStation 5'} description={'Black and White version of the PS5 coming out on sale.'} />
                </Box>
            </Box>
        </Box>
        <div className="features-items">
            <FeatureItem icon={<BusAlert /> } title={'FREE AND FAST DELIVERY'} desc={'Free delivery for all orders over $140'} />
            <FeatureItem icon={<Headphones /> } title={'24/7 CUSTOMER SERVICE'} desc={'Friendly 24/7 customer support'} />
            <FeatureItem icon={<SafetyCheck /> } title={'MONEY BACK GUARANTEE'} desc={'We reurn money within 30 days'} />

        </div>
    </Box>
}

export default Feature
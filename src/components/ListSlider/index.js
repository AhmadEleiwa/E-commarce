
import AbcIcon from "@mui/icons-material/Abc";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


import { Button, IconButton } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import CategoryCard from "../Category";

import SubTitle from '../../components/SubTitle'
import Title from '../../components/Title'

import './style.css'

const ListSlider = props => {
    const slider = useRef()
    const [slidePos, setSlidePos] = useState(0)
    const slideRightHandler = event => {
        let s = slidePos + slider.current.offsetWidth
        if (s >= slider.current.scrollWidth) {
            s = 0
        }
        setSlidePos(s)
        slider.current.scrollTo(s, 0)
    }
    const slideLeftHandler = event => {
        let s = slidePos - slider.current.offsetWidth
        if (s < 0) {
            s = 0
        }
        setSlidePos(s)
        slider.current.scrollTo(s, 0)
    }

    return <div className="slider" style={{ width: props.width ? props.width : '80%' }}>
        <div className="slider-header">
            <div className="slider-header-titles">
                <SubTitle >Caasd</SubTitle>
                <Title>Title</Title>
            </div>
            <div className="slider-header-controls">
                <IconButton onClick={slideLeftHandler}><ArrowBackIcon /></IconButton>
                <IconButton onClick={slideRightHandler}><ArrowForwardIcon /></IconButton>
            </div>

        </div>
        <div className="list-slider" ref={slider} >
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST1'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST2'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST3'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST4'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST5'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST6'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST7'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST8'} />

            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST9'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST10'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST11'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST12'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST13'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST14'} />
            <CategoryCard icon={<AbcIcon fontSize="inherit" />} title={'TEST15'} />

        </div>
    </div>
}

export default ListSlider
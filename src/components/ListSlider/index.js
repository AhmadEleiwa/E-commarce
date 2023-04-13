
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


import { IconButton } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";

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
                <SubTitle >{props.subTitle}</SubTitle>
                <Title>{props.title}</Title>
            </div>
            <div className="slider-header-controls">
                <IconButton onClick={slideLeftHandler}><ArrowBackIcon /></IconButton>
                <IconButton onClick={slideRightHandler}><ArrowForwardIcon /></IconButton>
            </div>

        </div>
        <div className="list-slider" ref={slider} >
            {props.children}
        </div>
    </div>
}

export default ListSlider
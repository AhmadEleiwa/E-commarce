import { Typography } from '@mui/material'
import Circle from './Circle'
import './style.css'

const FeatureItem = props => {
    return <div className="feature-item">
        <Circle icon={props.icon} />
        <Typography variant='h6'>{props.title}</Typography>
        <Typography color='gray' >{props.desc}</Typography>
    </div>
}

export default FeatureItem
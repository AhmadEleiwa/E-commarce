import { Paper } from "@mui/material"

const DiscountPercent = props => {
    return <Paper sx={{
        width: '4em',
        padding: ' 0.2em',
        backgroundColor: props.color ? props.color+'.main':'primary.main',
        color: props.color ? props.color+'.contrastText':'primary.contrastText',
    }}
        elevation={0}  >
        {props.children}
    </Paper>
}

export default DiscountPercent
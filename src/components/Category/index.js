import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import './style.css'
const CategoryCard = props => {
    return <Card className="category-card" variant={'outlined'}>
        <CardContent className="card-content" >
            <CardMedia sx={{ fontSize: '4em', marginTop: '4px' }}>
                {props.icon}
            </CardMedia>


            <Typography>{props.title}</Typography>
        </CardContent>
    </Card>

}

export default CategoryCard 
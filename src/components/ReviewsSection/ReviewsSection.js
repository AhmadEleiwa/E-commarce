import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
export default function ReviewsSection({rating}) {
    const [value, setValue] = useState(rating);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 }, display: 'flex', alignItems: 'center', width: 'fit-content',
            }}
        >
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Typography component="p" sx={{ ml: '8px', fontSize: '14px', fontWeight: '400', lineHeight: '21px', color: '#000000', opacity: '0.5', }}>(150 Reviews)</Typography>
            <Box sx={{ ml: '1em', pl: '16px', borderLeft: '1px solid #000000', opacity: '0.5' }}>
                <Typography component="p" sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '21px', color: '#00FF66', }}>In Stock</Typography>
            </Box>
        </Box>

    );
}
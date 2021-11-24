import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useSelector } from 'react-redux';
import { FixedSizeList  as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

export default function Photo({photo}) {
    const theme = useTheme();

    
    return (
        <Card sx={{ display: 'flex', backgroundColor: "#eee", marginTop: '0.5em' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={ photo.thumbnailUrl}
                alt="Image from API"
            />
            <Box sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '1.5em' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {photo.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {photo.id}
                    </Typography>
                </CardContent>
                
            </Box>
        </Card>
        
        
    );
}

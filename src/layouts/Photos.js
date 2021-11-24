import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Photo from '../components/Photo';
import {  useSelector } from 'react-redux';




export default function Photos() {
    
    const photos = useSelector((state) => state.allPhotos.photos); 

    console.log(photos)

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: "5px",
        marginLeft: 0,
        width: '100%',
        backgroundColor: '#eee',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '300px',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
   
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Search > //sx={{position: "fixed", zIndex: "1"}} */}
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search products…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
                 
            
            {

                photos.map((photo) => (
                    <Box key={photo.id} sx={{ display: 'flex', flexDirection: 'column' , marginTop: '0.5em'}}>
                        <Photo photo={photo} />
                    </Box>
                ))
            }

        </Box>
    );
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Photo from '../components/Photo';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotos } from '../redux/actions/photoActions';



export default function Photos() {
    
    // const [pageNo,setPageNo] = useState(1);
    const photos = useSelector((state) => state.allPhotos.photos);
    // const dispatch = useDispatch();

    // const fetchPhotos = () => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNo}&_limit=10`)
    //         .then((res) => {
    //             dispatch(setPhotos(res.data));
    //         }).catch((error) => {
    //             console.log(error);
    //         });
        
    // }


    
    // useEffect(() => {
    //     fetchPhotos();
    // }, [])

    const handleChange = (event) => {
        // setValues({ ...values, [prop]: event.target.value });
    };

    // const firstEvent = (e) => {
    //     console.log("was called her: "+pageNo)
	// 	//console.log(e);
	// 	var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
	// 	if(bottom){
	// 		let pg = pageNo + 1;
	// 		setPageNo(pg);
    //         console.log(pageNo);
	// 		fetchPhotos();
	// 	}
	// }

    

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
                // width: '12ch',
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
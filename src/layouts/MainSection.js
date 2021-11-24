import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import Topnav from './Topnav';
import Photos from './Photos';
import { useDispatch } from 'react-redux';
import { setPhotos } from '../redux/actions/photoActions'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function MainSection() {

    const [pageNo,setPageNo] = useState(1);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const displayType = loading === true ? 'display-flex' : 'display-none';
    // const scroll = loading === true ? 'no-scroll' : 'scrollable';
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    const supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: supportsPassive 
        }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    const fetchPhotos = () => {
        disableScroll()
        axios
            .get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNo}&_limit=10`)
            .then((res) => {
                dispatch(setPhotos(res.data));
                setLoading(false);
                enableScroll();

            }).catch((error) => {
                console.log(error);
            });
            
        
    }

    useEffect(() => {
        fetchPhotos();
        document.getElementById('main-id').onscroll = function(e) {
            // print "false" if direction is down and "true" if up
            // console.log(this.oldScroll > this.scrollY);
            if(this.oldScroll > this.scrollY) {
                // cosnole.log(this.oldScroll)
                document.getElementById('main-id').scrollTo( 0, 0);
            }
            // this.oldScroll = this.scrollY;
        }
        

    });


    const firstEvent = (e) => {
		var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if(bottom){
			let pg = pageNo + 1;
			setPageNo(pg);
            console.log(pageNo);
            setLoading(true);
			fetchPhotos();
		}
	}

    return(
        <div  className="main-container">
            <div className="navigation">
                <Topnav />
            </div>

            <div id="main-id" onScroll={firstEvent} className="main-section">
            
                <Photos />
                <Box className={displayType} sx={{ justifyContent: 'center' , marginTop: '2em', marginBottom: '3em'}}>
                    <CircularProgress />
                </Box>
                
            </div>
            
        </div>
    );
}
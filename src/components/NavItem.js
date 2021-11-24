import React from 'react';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
    ({ theme }) => ({
      ...theme.typography.body2,
      height: 48,
      position: 'relative',
      textTransform: 'capitalize',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(2.5),
      color: theme.palette.text.secondary,
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'absolute',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: theme.palette.primary.main
      }
    })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 25,
  height: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function NavItem({ item}){
    const [open, setOpen] = React.useState();
    const [active, setActive] = React.useState({
        item
    });
    const { title, path, icon , info, children, isActive } = item;

    const handleOpen = (event) => {
        // console.log(event) Change the active link by removing the specifed css
        setOpen((prev) => !prev);
        setActive((prev) => !prev);
    };


    return (
        <ListItemStyle
            onClick={handleOpen}
            className = {isActive  === true ? "menu-item active-link": "menu-item"}
        >
            <ListItemIconStyle className = {isActive  === true ? "active-icon": ""}>{icon && icon}</ListItemIconStyle>
            <ListItemText disableTypography primary={title} />
            {info && info}
           
        </ListItemStyle>
    );
}


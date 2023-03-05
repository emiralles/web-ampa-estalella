import { useState } from "react";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../appbar/AppBar';
import Toolbar from '../../toolbar/Toolbar';
import NavBar from '../../navbar/NavBar';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#009846' }}>
          <Box sx={{ flex: 2 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'onepirate'}
          </Link>
          <NavBar/>
        </Toolbar>
    </AppBar>
  );
}

export default AppAppBar;
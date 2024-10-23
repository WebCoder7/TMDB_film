import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PATH } from '../hooks/usePath';
import { NavLink } from 'react-router-dom';

// Search styling using MUI
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingBasketIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Favorites</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const navbarList = [
        {
            id: 1,
            to: PATH.nowPlaying,
            title: "Now Playing"
        },
        {
            id: 2,
            to: PATH.popoular,
            title: "Popoular"
        },
        {
            id: 3,
            to: PATH.topRated,
            title: "Top Rated"
        },
        {
            id: 4,
            to: PATH.upComing,
            title: "Up Coming"
        }
    ]

    return (
        <Box className="w-full bg-gradient-to-r from-blue-800 to-indigo-900 py-4 shadow-lg">
            <Toolbar className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-0">
                <div className="flex items-center space-x-4">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon className="text-white" />
                    </IconButton>
                    <h1 className="text-white text-3xl font-bold">T M D B</h1>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navbarList.map((item) => (
                        <NavLink 
                            key={item.id} 
                            to={item.to} 
                            className="text-white text-lg hover:text-indigo-300 transition-colors duration-300"
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <Search className="hidden sm:block bg-gray-800 rounded-md">
                        <SearchIconWrapper>
                            <SearchIcon className="text-gray-400" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className="pl-10 text-white"
                        />
                    </Search>
                    <div className="flex space-x-4">
                        <IconButton aria-label="show cart items" className="text-white">
                            <Badge badgeContent={4} color="error">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show favorite items" className="text-white">
                            <Badge badgeContent={17} color="error">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

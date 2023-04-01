import React, { useState, useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import Image from 'next/image';

import CallIcon from '@mui/icons-material/Call';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Link,
  Typography
} from "@mui/material";

import { useRouter } from 'next/router';

const drawerWidth = 240;
// const navItemsLeft = ['Home', 'About Us', 'Services', 'Events'];
const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Our Products',
    link: '/products',
  },
  {
    name: 'Career',
    link: '/career',
  },
  {
    name: 'Contact us',
    link: '/contact',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Call us',
    link: '/call',
  }
];

import styles from './style.module.css';

function Navbar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (
      // @ts-ignore
      fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      // @ts-ignore
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (
        // @ts-ignore
        ...params
      ) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        // @ts-ignore
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      }
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // @ts-ignore
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
  })

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ALUM TEC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: any, index: number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={
              () => {
                console.log(item);
              }
            } sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const customSyles = {
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: "35%",
      marginLeft: "3%",
      height: "100%"
    }
  };

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" className={styles.navContainer}>
        <Toolbar sx={{
          // display: "flex", justifyContent: "center" 
        }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={customSyles.logoContainer}>
            <Image
              className={styles.logo}
              src="/Images/Navbar/logo.png"
              alt="ALUM TEC"
              width={200}
              height={68}
              loading="eager"
              title="ALUM TEC"
            />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: "#332D2D", marginLeft: "4%", paddingTop: "8px" }}>
            {navItems.map((item: any, index: number) => (
              <Link
                key={index}
                sx={{
                  color: "#332D2D",
                  fontSize: 20,
                  textTransform: "none",
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "0.2s linear",
                  '&:hover': {
                    color: "#10146F",
                    textDecoration: "underline",
                    transition: "0.2s linear"
                  }
                }}
                onClick={() => {
                  router
                    .push(item.link)
                    .then(() => window.scrollTo(0, 0));
                }}
              >
                {item.name}
                {item.name === "Call us" && <CallIcon sx={{ fontSize: 30, marginLeft: "5px", color: "#10146F" }} />}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;
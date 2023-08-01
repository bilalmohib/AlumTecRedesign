import React, { useState, useEffect } from 'react';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Link,
  Typography
} from "@mui/material";
import { useRouter } from 'next/router';
import styles from './style.module.css';
import { DesktopNavbar, NavItemContainer, menuClick } from './methods';
import { NavItemContainerProps } from './types';
import { type } from 'os';

const drawerWidth = 240;

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Our Products', link: '/products' },
  { name: 'Career', link: '/career' },
  { name: 'Contact us', link: '/contact' },
  { name: 'Blog', link: '/blog' },
  { name: 'Call us', link: '/call' },
];

const MobileNavbar = ({ navItems, router, handleDrawerToggle }: DesktopNavbarProps) => {
  return (
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
  );
};

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
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ALUM TEC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItemButton key={index} onClick={() => console.log(item)} sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='flex'>
      <CssBaseline />
      <DesktopNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MobileNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}

export default Navbar;

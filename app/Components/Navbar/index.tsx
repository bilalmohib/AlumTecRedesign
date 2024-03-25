import { useEffect, useState } from "react";

import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { DesktopNavbar } from "./methods";
import { DesktopNavbarProps, NavbarProps } from "./types";
import styles from "./style.module.css";
import ScrollTopProgressBar from "../ScrollTopProgressBar";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Our Products", link: "/products" },
  { name: "Career", link: "/career" },
  { name: "Contact us", link: "/contact" },
  { name: "Blog", link: "/blog" },
  { name: "Call us", link: "/call" },
];

const MobileNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  mobileOpen,
}: DesktopNavbarProps) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ALUM TEC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => router.push(item.link)}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className={styles.menuButton}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

function Navbar({ bgWhite }: NavbarProps) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (
      // @ts-ignore
      fn
    ) => {
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
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // @ts-ignore
      document.documentElement.dataset.scroll = window.scrollY;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  });

  return (
    <div>
      <CssBaseline />
      <DesktopNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        bgWhite={bgWhite}
      />
      <MobileNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <ScrollTopProgressBar />
    </div>
  );
}

export default Navbar;

import * as React from "react";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

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

function AdminNavbar({ bgWhite }: NavbarProps) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const debounce = (fn: any) => {
      let frame: any;
      return (...params: any) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  });

  useEffect(() => {
    const loginPage: boolean = router.pathname === "/admin-login";

    if (!loading) {
      if (user) {
        // alert("User is already Signed In" + user.email);
        // do something with the user
        if (loginPage) router.push("/admin");
      } else {
        console.log("user is null");
        // alert("User is not Signed In");
        if (!loginPage) {
          router.push("/admin-login");
        }

        // if user is not logged in, redirect to login page
      }
    }
    // if user is null, redirect to login page
  }, [user, loading, router]);

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
    </div>
  );
}

export default AdminNavbar;

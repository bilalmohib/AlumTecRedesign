
import Router from "next/router";
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import { DesktopNavbarProps, NavItemContainerProps } from "./types";

import {
    Link,
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
    Typography
} from "@mui/material";

import styles from "./style.module.css";

export const menuClick = (link: any) => {
    Router
        .push(link)
        .then(() => window.scrollTo(0, 0));
}

export const NavItemContainer = ({ navItems, router }: NavItemContainerProps) => {
    return (
        <div className={styles.navItemContainer}>
            {
                navItems.map((item, index) => (
                    <Link
                        key={index}
                        className={styles.navItem}
                        onClick={() => menuClick(item.link)}

                    >
                        {item.name}
                        {
                            item.name === "Call us" && <CallIcon sx={{ fontSize: 30, marginLeft: "5px", color: "#10146F" }} />}
                    </Link>
                ))
            }
        </div>
    );
};

export const DesktopNavbar = ({ navItems, router, handleDrawerToggle }: DesktopNavbarProps) => {
    return (
        <AppBar component="nav" position="fixed" className={styles.navContainer}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src="/Images/Navbar/logo.png"
                        alt="ALUM TEC"
                        width={200}
                        height={68}
                        loading="eager"
                        title="ALUM TEC"
                    />
                </div>

                <NavItemContainer navItems={navItems} router={router} />
            </Toolbar>
        </AppBar>
    );
};

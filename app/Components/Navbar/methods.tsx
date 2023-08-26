import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Router from "next/router";
import {
  DesktopNavbarProps,
  NavItemContainerProps,
  NavbarProps,
} from "./types";

import { AppBar, IconButton, Link, Toolbar } from "@mui/material";

import styles from "./style.module.css";

export const menuClick = (link: any) => {
  Router.push(link).then(() => window.scrollTo(0, 0));
};

export const NavItemContainer = ({
  navItems,
  router,
}: NavItemContainerProps) => {
  return (
    <div className={styles.navItemContainer}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          className={`${styles.navItem} no-underline hover:no-underline`}
          onClick={() => menuClick(item.link)}
        >
          {item.name === "Call us" ? (
            <div className="flex">
              <div className="uppercase hover-underline-animation">
                {item.name}
              </div>
              <CallIcon
                sx={{
                  fontSize: 30,
                  marginLeft: "5px",
                  color: "#10146F",
                  marginTop: "-3px",
                }}
              />
            </div>
          ) : (
            <div className="uppercase hover-underline-animation">
              {item.name}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export const DesktopNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  bgWhite,
}: DesktopNavbarProps) => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      className={`${styles.navContainer} ${bgWhite ? styles.bgWhite : ""}`}
    >
      <Toolbar className={styles.insideContainer}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/Images/Navbar/logo.jxr"
            alt="ALUM TEC"
            width={200}
            height={68}
            loading="lazy"
            title="ALUM TEC"
          />
        </div>

        <NavItemContainer navItems={navItems} router={router} />

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={styles.menuButton}
          onClick={handleDrawerToggle}
        >
          <Image
            className={styles.phone_logo}
            src="/Images/Navbar/phone_logo.jxr"
            alt="phone"
            title="phone"
            width={17}
            height={20}
          />
          <div>
            <MenuIcon className={styles.menuButtonIcon} />
          </div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export type NavItemContainerProps = {
    navItems: { name: string, link: string }[];
    router: any;
}

export type NavbarProps = {
    bgWhite?: boolean;
}

export type DesktopNavbarProps = {
    navItems: NavItemContainerProps['navItems'];
    router: any;
    handleDrawerToggle: () => void;
    mobileOpen: boolean;
    bgWhite?: boolean;
};


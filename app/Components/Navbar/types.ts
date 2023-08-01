export type NavItemContainerProps = {
    navItems: { name: string, link: string }[];
    router: any;
}

export type DesktopNavbarProps = {
    navItems: NavItemContainerProps['navItems'];
    router: any;
    handleDrawerToggle: () => void;
};

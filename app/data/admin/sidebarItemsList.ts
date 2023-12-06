import AddServices from "@/app/pageComponents/Admin/Services/AddServices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

interface SidebarItem {
  label: string;
  icon: React.ElementType;
  component: React.ElementType;
}

export const sidebarItemsList: SidebarItem[] = [
  {
    label: "Services",
    icon: DesignServicesIcon,
    component: AddServices,
  },
  {
    label: "Projects",
    icon: DesignServicesIcon,
    component: AddServices,
  },
  {
    label: "Blogs",
    icon: DesignServicesIcon,
    component: AddServices,
  },
  {
    label: "Drafts",
    icon: DesignServicesIcon,
    component: AddServices,
  },
];

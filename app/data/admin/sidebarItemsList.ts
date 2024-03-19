import AddServices from "@/app/pageComponents/Admin/Services/AddServices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";

interface SidebarItem {
  label: string;
  icon: React.ElementType;
  component: React.ElementType;
}

export const sidebarItemsList: SidebarItem[] = [
  {
    label: "Services",
    icon: MdOutlineMiscellaneousServices,
    component: AddServices,
  },
  /* {
    label: "Projects",
    icon: AiOutlineProject,
    component: AddServices,
  }, */
  {
    label: "Blogs",
    icon: BiSolidBookContent,
    component: AddServices,
  },
  {
    label: "Inquiries",
    icon: MdContactPhone,
    component: AddServices,
  },
];

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

interface AdminBlogsHeaderProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

function AdminBlogsHeader({ value, setValue }: AdminBlogsHeaderProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="primary"
      aria-label="Add or View Services"
      className="border-2 border-blue-600 border-solid rounded-none border-b-0"
    >
      <Tab icon={<ControlPointIcon />} iconPosition="start" label="Add Blogs" />
      <Tab icon={<ViewCompactIcon />} iconPosition="start" label="View Blogs" />
    </Tabs>
  );
}
export default AdminBlogsHeader;

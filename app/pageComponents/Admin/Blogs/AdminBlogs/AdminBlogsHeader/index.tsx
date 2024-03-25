import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditIcon from '@mui/icons-material/Edit';
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
      className="border-2 border-indigo-600 border-solid rounded-b-none rounded-t-lg border-b-0"
    >
      <Tab icon={<ControlPointIcon />} iconPosition="start" label="Add Blogs" />
      <Tab icon={<ViewCompactIcon />} iconPosition="start" label="View Blogs" />
      <Tab icon={<EditIcon />} iconPosition="start" label="Edit Blogs" />
    </Tabs>
  );
}
export default AdminBlogsHeader;

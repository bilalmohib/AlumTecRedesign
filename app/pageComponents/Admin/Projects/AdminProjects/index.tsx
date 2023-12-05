import { useState } from "react";
import AddProjects from "../AddProjects";
import ViewProjects from "../ViewProjects";
import AdminProjectsHeader from "./AdminProjectsHeader";

const AdminProjects = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <AdminProjectsHeader value={selectedTab} setValue={setSelectedTab} />

      <div className="p-5 border-2 border-indigo-600 rounded-tl-none rounded-tr-none border-t-1 border-t-blue-50 -mt-[2px] border-solid rounded-lg mb-6">
        {selectedTab === 0 && <AddProjects />}
        {selectedTab === 1 && <ViewProjects />}
      </div>
    </div>
  );
};
export default AdminProjects;

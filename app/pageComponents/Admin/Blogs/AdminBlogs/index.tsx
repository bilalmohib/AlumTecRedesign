import { useState } from "react";
import AddBlogs from "../AddBlogs";
import ViewBlogs from "../ViewBlogs";
import EditBlogs from "../EditBlogs";
import AdminBlogsHeader from "./AdminBlogsHeader";

const AdminBlogs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <AdminBlogsHeader value={selectedTab} setValue={setSelectedTab} />

      <div className="p-5 border-2 border-blue-600 rounded-tl-none rounded-tr-none border-t-1 border-t-blue-50 -mt-[2px] border-solid rounded-lg mb-6">
        {selectedTab === 0 && <AddBlogs />}
        {selectedTab === 1 && <ViewBlogs />}
        {selectedTab === 2 && <EditBlogs />}
      </div>
    </div>
  );
};
export default AdminBlogs;

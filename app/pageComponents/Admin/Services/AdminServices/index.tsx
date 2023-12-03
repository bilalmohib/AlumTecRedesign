import { useState } from "react";
import AddServices from "../AddServices";
import ViewServices from "../ViewServices";
import AdminServicesHeader from "./AdminServicesHeader";

const AdminServices = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <AdminServicesHeader value={selectedTab} setValue={setSelectedTab} />

      <div className="p-5 border-2 border-indigo-600 rounded-tl-none rounded-tr-none border-t-1 border-t-blue-50 -mt-[2px] border-solid rounded-lg mb-6">
        {selectedTab === 0 && <AddServices />}
        {selectedTab === 1 && <ViewServices />}
      </div>
    </div>
  );
};
export default AdminServices;

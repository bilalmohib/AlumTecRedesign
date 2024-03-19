import { useState } from "react";
import ViewInquiries from "../ViewInquiries";
import AdminInquiriesHeader from "./AdminInquiriesHeader";

const AdminInquiries = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div>
            <AdminInquiriesHeader value={selectedTab} setValue={setSelectedTab} />

            <div className="p-5 border-2 border-blue-600 rounded-tl-none rounded-tr-none border-t-1 border-t-blue-50 -mt-[2px] border-solid rounded-lg mb-6">
                <ViewInquiries />
            </div>
        </div>
    );
};
export default AdminInquiries;

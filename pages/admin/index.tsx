import { useEffect } from "react";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminNavbar from "@/app/pageComponents/Admin/AdminNavbar";

const Admin = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <div className="border border-solid border-red-500 block h-24">
        <AdminNavbar />
      </div>

      <div className="px-6">
        {user && (
          <div>
            <h1>Welcome {user.email}</h1>

            <button
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Admin;

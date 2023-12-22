import { db, auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const ViewBlogs = () => {
  // For Loading
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <h1 className="adminHeadingText">View Blogs</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id
        ducimus dolorum, doloribus, nulla animi quo dignissimos expedita
        provident dicta quos fugiat iure nam enim, blanditiis iusto esse nobis
        eum.
      </div>
    </div>
  );
};
export default ViewBlogs;

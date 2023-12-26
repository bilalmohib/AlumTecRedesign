import { db, auth } from "@/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
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
  const [user, loadingAuth, errorAuth] = useAuthState(auth);

  // For Blogs
  // const e = email;
  const email = user?.email;
  const router = useRouter();
  /////////////////////////////////////// Database Part ////////////////////////////////////////////////
  // let q = query(collection(db, "Data", "Blogs", e));
  let q = query(collection(db, "Blogs"));

  const [snapshot, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  // const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    if (!loading && snapshot) {

      let localObj: any;

      let arrBlogsLocal = snapshot?.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      localObj = arrBlogsLocal;

      // Now only i need blogs that are created by me means email is equal to signedInUserData.email
      // or that are shared with me means blog members array contains signedInUserData.email

      // Filter the blogs array and extract only those blogs that are created by me
      // localObj = localObj.filter((blog: any) => );

      // Filter the blogs array and extract only those blogs that are shared with me
      localObj = localObj.filter((blog: any) => blog?.createdBy.toString() === email?.toString());

      let arrBlogs: any = localObj;

      setBlogs(arrBlogs);
      console.log("Blogs ==> ", blogs);
      console.log("Created by email ==> ", email);
      console.log("Blogs Email ==> ", blogs[0]?.createdBy.toString() == email?.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, snapshot]);
  // FOR GETTING BLOGS

  // // Update Report Data
  // useEffect(() => {
  //     updateReportData();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Blogs]);

  // const updateReportData = () => {

  // };

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

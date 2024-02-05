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
import { BlogDataTypes } from "@/app/pageComponents/Blog/BlogBody/types";
import { Button } from "@mui/material";

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

      let arrBlogsLocal = snapshot?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      localObj = arrBlogsLocal;

      // Now only i need blogs that are created by me means email is equal to signedInUserData.email
      // or that are shared with me means blog members array contains signedInUserData.email

      // Filter the blogs array and extract only those blogs that are created by me
      // localObj = localObj.filter((blog: any) => );

      // Filter the blogs array and extract only those blogs that are shared with me
      localObj = localObj.filter(
        (blog: any) => blog?.createdBy.toString() == email?.toString()
      );

      let arrBlogs: any = localObj;

      setBlogs(arrBlogs);
      console.log("Blogs ==> ", blogs);
      console.log("Created by email ==> ", email);
      console.log(
        "Blogs Email ==> ",
        blogs[0]?.createdBy.toString() == email?.toString()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, snapshot]);
  // FOR GETTING BLOGS

  // Delete Blog
  const deleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(db, "Blogs", id));
        console.log("Blog deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog: ", error);
      }
    }
  };

  return (
    <div>
      <h1 className="adminHeadingText">View Blogs</h1>

      {blogs.length > 0 ? (
        <div>
          {blogs?.map((blog: BlogDataTypes) => (
            <div className="flex justify-between border gap-2 border-slate-200 hover:bg-slate-200 cursor-pointer border-solid rounded-lg px-4 mt-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  <b className="text-indigo-600 underline">Blog Title:</b>{" "}
                  {blog?.title}
                </h1>
                <p className="text-md text-slate-800">
                  <b className="text-orange-500 italic">Blog written by:</b>{" "}
                  {blog?.authorName}
                </p>
                <p className="text-md text-slate-800">
                  <b className="text-purple-500 italic">Date posted:</b>{" "}
                  {blog?.createdAt}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>No blogs available</h3>
      )}
    </div>
  );
};
export default ViewBlogs;

import { db, auth } from "@/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { blogDataList } from "./data";
import Footer from "@/app/Components/Footer";

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
import BlogCardSkeleton from "@/app/pageComponents/Blog/BlogBody/BlogCardSkeleton";

const BlogBody = () => {
  const router = useRouter();

  // For Loading
  const [user, loadingAuth, errorAuth] = useAuthState(auth);

  // For Blogs
  // const e = email;
  const email = user?.email;
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
      // localObj = localObj.filter((blog: any) => blog?.createdBy.toString() == email?.toString());

      let arrBlogs: any = localObj;

      setBlogs(arrBlogs);
      console.log("Blogs ==> ", blogs);
      // console.log("Created by email ==> ", email);
      // console.log("Blogs Email ==> ", blogs[0]?.createdBy.toString() == email?.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, snapshot]);
  // FOR GETTING BLOGS

  return (
    <div>
      <BlogHeader />
      <div className="mt-10">
        {
          (!loading) ? (
            <div>
              {(blogs.length != 0) ? (
                <>
                  {blogs.map((blogData: BlogDataTypes, index: number) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          router.push({
                            pathname: `/BlogDetails/${blogData.slug}/${blogData.id}`,
                          })
                        }
                      >
                        <BlogCard {...blogData} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="flex justify-center items-center h-96">
                  <h2 className="text-center text-xl sm:text-2xl px-12 sm:px-auto">
                    No blogs published yet. Please check back later. 😊
                  </h2>
                </div>
              )}

              <div className="mt-10 mb-8 w-full flex flex-col justify-center items-center hidden">
                <Button
                  variant="contained"
                  color="primary"
                  className="font-[Sharp Grotesk] text-lg mt-0 font-normal leading-[77px] rounded-sm bg-[#123E95] hover:bg-[#0b46bb] hover:text-white w-40 h-[50px]"
                  onClick={() => {
                    console.log("Button clicked");
                  }}
                >
                  Load More
                </Button>
              </div>
            </div>
          ) : (
            <>
              {[1, 2, 3].map((v, i) => {
                return (
                  <div key={i}>
                    <BlogCardSkeleton />
                  </div>
                )
              })}
            </>
          )
        }
      </div>
      {/* Add divider here */}
      <div className="border-t border-gray-300 border-dotted border-b-0 my-10 mx-16"></div>
      {/* Add divider here */}
      <Footer />
    </div>
  );
};
export default BlogBody;

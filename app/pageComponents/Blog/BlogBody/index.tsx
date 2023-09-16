import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { blogDataList } from "./data";
import { BlogDataTypes } from "./types";
import { useRouter } from "next/router";

const BlogBody = () => {
  const router = useRouter();
  return (
    <div>
      <BlogHeader />
      <div className="mt-10">
        {blogDataList.map((blogData: BlogDataTypes, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                router.push({
                  pathname: `/BlogDetails/${blogData.title}/${blogData.id}`,
                })
              }
            >
              <BlogCard {...blogData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogBody;

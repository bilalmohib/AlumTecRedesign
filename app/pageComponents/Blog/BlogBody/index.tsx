import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { blogDataList } from "./data";
import { BlogDataTypes } from "./types";

const BlogBody = () => {
  return (
    <div>
      <BlogHeader />
      <div className="mt-10">
        {blogDataList.map((blogData: BlogDataTypes, index) => {
          return (
            <div key={index}>
              <BlogCard {...blogData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogBody;

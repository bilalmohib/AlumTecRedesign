import { Button } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { blogDataList } from "./data";
import { BlogDataTypes } from "./types";
import { useRouter } from "next/router";
import Footer from "@/app/Components/Footer";

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
      <div className="mt-10 mb-8 w-full flex flex-col justify-center items-center">
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
      <Footer />
    </div>
  );
};
export default BlogBody;

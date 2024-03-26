import Image from "next/image";
import { BlogDataTypes } from "../types";
import FormattedDateFromTimeStamp from "@/app/Components/FormattedDateFromTimeStamp";

const BlogCard = (props: BlogDataTypes) => {
  return (
    <div className="flex flex-row mx-16 mb-8 rounded-lg shadow-md hover:shadow-lg h-80 cursor-pointer">
      <div className="w-5/12">
        <Image
          src={props.coverImage}
          alt="cover image"
          width={500}
          height={300}
          style={{
            borderBottomLeftRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
          }}
          className="w-full h-full block object-cover
          hover:scale-90 transition duration-1000 ease-in-out transform
          "
        />
      </div>
      <div className="w-7/12">
        <div className="flex justify-end mr-6 mt-6">
          <h3 className="mt-0 bg-emerald-500 p-1 px-3 text-sm rounded-lg text-center font-sans w-fit">
            Company News
          </h3>
        </div>
        <div className="px-20 flex flex-col justify-center -mt-8">
          <div className="flex flex-row mt-4">
            <Image
              src={props.photoURL}
              alt="author"
              width={40}
              height={40}
              className="rounded-full block"
            />
            <h3 className="m-0 font-light mt-2 ml-2">{props.authorName}</h3>
          </div>
          <h1 className="text-2xl font-semibold mt-5 mb-0 truncate capitalize">{props.title}</h1>
          <p className="text-base font-light mt-3 mb-0 text-gray-600">
            {/* <FormattedDateFromTimeStamp timeStamp={props.createdAt} /> */}
            {new Date(props.createdAt).toDateString()}
          </p>
          {/* <p className="text-base font-light mt-3 mb-0">{props.description}</p> */}
          <div dangerouslySetInnerHTML={{
            // If there is image then skip the first image
            // Remove the internal styling of text and divs
            __html: props.content.replace(/<img[^>]*>/g, "").replace(/<div[^>]*>/g, "").replace(/<p[^>]*>/g, "").replace(/<span[^>]*>/g, "").replace(/<h1[^>]*>/g, "").replace(/<h2[^>]*>/g, "").replace(/<h3[^>]*>/g, "").replace(/<h4[^>]*>/g, "").replace(/<h5[^>]*>/g, "").replace(/<h6[^>]*>/g, "").replace(/<style[^>]*>/g, "").replace(/<script[^>]*>/g, "").replace(/<link[^>]*>/g, "").replace(/<meta[^>]*>/g, "").replace(/<title[^>]*>/g, "").replace(/<head[^>]*>/g, "").replace(/<body[^>]*>/g, "").replace(/<html[^>]*>/g, "").replace(/<[^>]*>/g, "").replace(/<\/[^>]*>/g, ""),
          }}
            className="text-base font-light mt-3 mb-0"
            style={{ maxHeight: "100px", overflow: "hidden" }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;

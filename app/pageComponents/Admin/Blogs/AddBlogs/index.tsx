import SVGImage from "@/app/SVGs/SVGImage";
import { Button } from "@mui/material";

const AddBlogs = () => {
  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => console.log("Hello")}
          className="fixed top-44 z-50 w-11/12"
        >
          Submit Blog
        </Button>
      </div>

      <section className="mt-10">
        <div className="bg-[#f4f2ee] w-full h-80 flex flex-col justify-center items-center">
          <SVGImage className="mx-auto block" />
          <h5 className="font-normal text-base text-center font-sans">
            We recommend uploading or dragging in an image that is{" "}
            <b>1920x1080 pixels</b>
          </h5>
        </div>
      </section>
    </div>
  );
};
export default AddBlogs;

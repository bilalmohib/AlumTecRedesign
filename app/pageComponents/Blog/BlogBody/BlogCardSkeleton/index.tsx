import Image from "next/image";
import Skeleton from '@mui/material/Skeleton';

const BlogCard = () => {
    return (
        <div className="flex flex-row mx-16 mb-8 rounded-lg shadow-md hover:shadow-lg h-80 cursor-pointer">
            <Skeleton variant="rectangular" className="w-5/12 h-full rounded-tl-lg rounded-bl-lg">
            </Skeleton>
            <div className="w-7/12">
                <div className="flex justify-end mr-6 mt-6">
                    <Skeleton variant="rectangular" className="w-32 h-auto mt-0 rounded-sm" height={25} />
                </div>
                <div className="pl-20 pr-6 flex flex-col justify-center -mt-8">
                    <div className="flex flex-row mt-4">
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" className="m-0 font-light mt-2 ml-2 w-36 rounded-sm" />
                    </div>
                    <Skeleton variant="rectangular" className="mt-5 mb-0 w-96 h-8 rounded-sm" />
                    <Skeleton variant="rectangular" className="mt-3 mb-0 w-36 h-5 rounded-sm" />

                    <Skeleton variant="rectangular" className="w-full h-auto mt-3 mb-0 rounded-sm" height={100} />
                </div>
            </div>
        </div >
    );
};
export default BlogCard;

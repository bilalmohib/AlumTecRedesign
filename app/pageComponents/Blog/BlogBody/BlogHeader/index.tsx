import { useState } from "react";
import { blogtabs } from "./data";
import { BlogTabType } from "./types";
import { Button } from "@mui/material";
import BlogSearchHeader from "./SearchHeader";

const BlogHeader = () => {
  const [selected, setSelected] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const handleSelected = (index: number) => {
    setSelected(index);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex px-16">
      <div className="w-7/12">
        <div className="flex">
          {blogtabs.map((tab: BlogTabType, index: number) => {
            return (
              <Button
                variant="contained"
                color="primary"
                key={tab.id}
                className={`mr-3 cursor-pointer rounded-sm
                    font-sans text-lg mt-16 font-semibold leading-[77px] hover:bg-[#0b46bb] hover:text-white w-fit px-6 h-[50px]
                ${
                  selected === index
                    ? "bg-[#123E95] text-white"
                    : "bg-transparent text-[#123E95]"
                }`}
                onClick={() => handleSelected(index)}
              >
                {tab.name}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="w-5/12 flex justify-end items-end">
        <BlogSearchHeader
          placeholder="Search for blogs"
          value={search}
          onChange={handleSearch}
        />
        
      </div>
    </div>
  );
};
export default BlogHeader;

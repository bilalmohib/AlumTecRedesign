import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BlogSearchHeaderProps } from "./types";
import { useState, useEffect } from "react";

const BlogSearchHeader = ({
  placeholder,
  value,
  onChange,
}: BlogSearchHeaderProps) => {
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 10px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "5px",
        border: isOnFocus ? "1px solid #092fabfc" : "1px solid #E5E5E5",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        className="font-mono text-lg"
        onChange={onChange}
              onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default BlogSearchHeader;

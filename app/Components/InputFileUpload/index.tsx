import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface InputFileUploadProps {
  label?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

function InputFileUpload({
  label,
  fullWidth,
  icon,
  className,
  onChange,
  error,
}: InputFileUploadProps) {
  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={icon ? icon : <CloudUploadIcon />}
        fullWidth={fullWidth}
        className={`flex ${className}`}
      >
        <p className="my-0 text-center">{label}</p>
        <VisuallyHiddenInput type="file" onChange={onChange} />
      </Button>
      {error && (
        <p className="text-red-500 text-sm mt-2">Please select an image</p>
      )}
    </div>
  );
}
export default InputFileUpload;

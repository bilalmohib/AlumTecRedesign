import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface localCircularProgressProps extends CircularProgressProps {
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | undefined;
  size?: number | string | undefined;
  thickness?: number | undefined;
  sx?: object | undefined;
  labelClass?: string;
}

function CircularProgressWithLabel(
  props: localCircularProgressProps & {
    value: number;
    labelClass?: string;
  }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress color="primary" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.white"
          className={`${props.labelClass}`}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
export default CircularProgressWithLabel;

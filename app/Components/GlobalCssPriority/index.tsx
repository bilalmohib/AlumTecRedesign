// components/GlobalCssPriority.tsx
import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { GlobalCssPriorityType } from "./types";

const GlobalCssPriority = ({ children }: GlobalCssPriorityType) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default GlobalCssPriority;

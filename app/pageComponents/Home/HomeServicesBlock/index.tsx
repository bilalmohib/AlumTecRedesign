import { useState, useEffect, ReactNode } from "react";

import { Box, Typography, Button, Grid } from "@mui/material";

import Image from "next/image";

// Importing components
import HSBHeader from "./HSBHeader";
import HSBBody from "./HSBBody";

// Importing styles
import styles from "./style.module.css";

const HomeServicesBlock = () => {
  return (
    <div className={styles.container}>
      <HSBHeader />

      <section>
        <HSBBody />
      </section>
    </div>
  );
};
export default HomeServicesBlock;

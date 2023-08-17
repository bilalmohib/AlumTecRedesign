import { useState, useEffect } from "react";

import { Box, Typography, Button, Grid } from "@mui/material";

import Image from "next/image";

// Importing components
import HSBBody from "./HSBBody";

// Importing styles
import styles from "./style.module.css";

const AboutMissionBlock = () => {
  return (
    <div className={styles.container}>
      <section>
        <HSBBody />
      </section>
    </div>
  );
};
export default AboutMissionBlock;

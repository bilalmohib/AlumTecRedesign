import { useState, useEffect } from "react";

import { Box, Typography, Button, Grid } from "@mui/material";

import Image from "next/image";

// Importing components
import HSBBody from "./HSBBody";

// Importing styles
import styles from "./style.module.css";
import GetInTouchContactForm from "@/app/Components/GetInTouchContactForm";

const AboutStoryBlock = () => {
  return (
    <div className={styles.container}>
      <section>
        <HSBBody />
        <GetInTouchContactForm />
      </section>
    </div>
  );
};
export default AboutStoryBlock;

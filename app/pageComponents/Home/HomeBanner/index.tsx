import { Grid } from "@mui/material";

import LeftContainerHB from "./LeftContainerHB";
import RightContainerHB from "./RightContainerHB";

import styles from "./style.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.customContainer}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <LeftContainerHB />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightContainerHB />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomeBanner;

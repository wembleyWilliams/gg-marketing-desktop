import React, {useEffect, useState} from "react";
import "./index.scss";
import services from "../../services";
import {Container, Grid} from "@mui/material";

const Dashboard = () => {
    //TODO: Set up the dashboard to switch column mode for smaller screen size
    return (
      <Container className={"wrapper"}
                 maxWidth={"xl"}
                
      >
          <Grid container xs={12} direction={"row"} className={"wrapper__container"}>
              <Grid item xs={6} className={"wrapper__container__left-column"}>
              
              </Grid>
              <Grid item xs={6} className={"wrapper__container__right-column"}>
    
              </Grid>
          </Grid>
      </Container>
    );
}

export default Dashboard;
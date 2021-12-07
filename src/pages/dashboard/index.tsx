import React, {useEffect, useState} from "react";
import "./index.scss";
import services from "../../services";
import {Container, Grid} from "@mui/material";
import ProfileDetailsSection from "../../components/profile-details-section";
import ProfileDataSection from "../../components/profile-data-section";

const Dashboard = () => {
    //TODO: Set up the dashboard to switch column mode for smaller screen size
    return (
        <Container className={"wrapper"}
                   maxWidth={"xl"}>
            <Grid container xs={12} direction={"row"} className={"wrapper__container"}>
                <Grid container item xs={6} direction={"column"}
                      className={"wrapper__container__left-column"}>
                    <Grid item>
                        <ProfileDetailsSection/>
                    </Grid>
                    <Grid item>
                        <ProfileDataSection/>
                    </Grid>
                </Grid>
                
                
                <Grid container item xs={6} className={"wrapper__container__right-column"}>
                
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dashboard;
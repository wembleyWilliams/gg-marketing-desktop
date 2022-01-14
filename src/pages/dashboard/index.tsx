import React, {useEffect, useState} from "react";
import "./index.scss";
import services from "../../services";
import {Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import ProfileDetailsSection from "../../components/profile-details-section";
import ProfileDataSection from "../../components/profile-data-section";
import BusinessDetails from "../../components/business-details";
import {State} from "../../reducers";

const Dashboard = () => {
    const description = useSelector(
      (state: State) => state.application.businessDetails?.description)
    const title = useSelector(
      (state: State) => state.application.businessDetails?.title)
    
    //TODO: Set up the dashboard to switch column mode for smaller screen size
    return (
        <Container className={"wrapper"}
                   maxWidth={"xl"}>
            <Grid container xs={12} direction={"row"} className={"wrapper__container"}>
                <Grid container item xs={6} direction={"column"}
                      className={"wrapper__container__left-column"}>
                    <Grid item>
                        <ProfileDetailsSection
                          title={title}
                          name={'Wembley Williams'}
                        />
                    </Grid>
                    <Grid item>
                        <ProfileDataSection
                            description={description}
                        />
                    </Grid>
                </Grid>
                
                
                <Grid container item xs={6} className={"wrapper__container__right-column"}>
                    <BusinessDetails businessId={'6179b92ff2091343c07d34ba'}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dashboard;
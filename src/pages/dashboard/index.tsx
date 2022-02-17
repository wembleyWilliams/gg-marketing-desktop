import React, {useEffect, useState} from "react";
import "./index.scss";
import services from "../../services";
import {Container, Grid} from "@mui/material";
import ProfileDetailsSection from "../../components/profile-details-section";
import ProfileDataSection from "../../components/profile-data-section";
import BusinessDetails from "../../components/business-details";
import {State} from "../../reducers";
import Loading from "../../components/common/loading";
import {setBusinessDetails} from "../../actions/applicationActions";
import {useDispatch, useSelector} from "react-redux";

const log = require('loglevel');
log.setDefaultLevel("INFO")

const Dashboard = () => {
  const dispatch = useDispatch();
  const description = useSelector(
    (state: State) => state.application.businessDetails?.description)
  const title = useSelector(
    (state: State) => state.application.businessDetails?.title)
  const firstname = useSelector(
    (state: State) => state.user.userDetails?.firstname)
  const lastname = useSelector(
    (state: State) => state.user.userDetails?.lastname)
  
  const businessId = useSelector(
    (state: State) => state.user.userDetails?.businessId)
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    log.info("Retrieving business data")
    services
      .getBusiness(businessId)
      .then((res) => {
        dispatch(setBusinessDetails(res))
        setCompleted(true)
      })
      .catch((err) => {
        log.error(err)
      })
  }, [businessId, completed])
  
  
  //TODO: Set up the dashboard to switch column mode for smaller screen size
  return (
    <>
      { !completed ? (
          <Loading/>
        ):(
        <Container className={"wrapper"}
                   maxWidth={"xl"}>
          <Grid container xs={12} direction={"row"} className={"wrapper__container"}>
            <Grid container item xs={6} direction={"column"}
                  className={"wrapper__container__left-column"}>
              <Grid item>
                <ProfileDetailsSection
                  title={title}
                  name={`${firstname} ${lastname}`}
                />
              </Grid>
              
              <Grid item>
                <ProfileDataSection
                  description={description}
                />
              </Grid>
            </Grid>
            
            <Grid container item xs={6} className={"wrapper__container__right-column"}>
              <BusinessDetails businessId={businessId}/>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Dashboard;
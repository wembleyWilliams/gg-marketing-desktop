import React, {useEffect, useState} from "react";
import {Container, Paper, Stack} from "@mui/material";
import './index.scss';
import Header from "../header";
import Description from "../description";
import Socials from "../socials";
import services from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {setBusinessDetails} from "../../actions/applicationActions";
import {State} from "../../reducers"
import Loading from "../common/loading";

const log = require('loglevel');
log.setDefaultLevel("INFO")

const BusinessDetails = () => {
    const dispatch = useDispatch();
    const description = useSelector(
        (state: State) => state.application.businessDetails?.description)
    const title = useSelector(
        (state: State) => state.application.businessDetails?.title)
    const logoMime = useSelector(
        (state: State) => state.application.businessDetails?.logo?.mime)
    const logoData = useSelector(
        (state: State) => state.application.businessDetails?.logo?.data)
    const businessHandles = useSelector(
        (state: State) => state.application.businessDetails?.businessHandles)
    
    const [completed, setCompleted] = useState(undefined);
    
    useEffect(() => {
        log.info("Retrieving business data")
        services
            .getBusiness()
            .then((res) => {
                dispatch(setBusinessDetails(res))
                setCompleted(true)
            })
            .catch((err) => {
                log.error(err)
            })
    }, [])
    
    return (
        <>
            {!completed ? (
                <Loading/>
            ) : (
                <Container maxWidth={"xs"} className={"background"}>
                    <Stack spacing={-3} className={"main-body"}>
                        <Header image={`data:${logoMime};base64,${logoData}`}/>
                        <Paper className={"business-title"}>
                            <div>
                                <p>{title}</p>
                            </div>
                        </Paper>
                        <Stack spacing={-6}>
                            <Description description={description}/>
                            <Socials/>
                        </Stack>
                    </Stack>
                </Container>
            )}
        </>
    );
}

export default BusinessDetails;
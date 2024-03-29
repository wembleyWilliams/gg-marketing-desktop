import React from "react";
import "./index.scss";
import {Paper, Stack} from "@mui/material";
import {Add, AddCircleRounded, Twitter} from "@mui/icons-material";

const ProfileDataSection = () => {
    
    return(
        <div className={"data-wrapper"}>
            <div className={"container"}>
                <div className={"container__left-column"}>
                    <div className={"container__left-column__upload-section-wrapper"}>
                        <div className={"container__left-column__upload-section-wrapper__upload-section-icon"}>
                            <div className={"container__left-column__upload-section-wrapper__icon-background"}>
                                <Add />
                            </div>
                        </div>
                        <div className={"container__left-column__upload-section-wrapper__upload-section-text"}>
                            <b >UPLOAD IMAGE</b>
                        </div>
                    </div>
                    <div className={"container__left-column__upload-section-wrapper__upload-section-description"}>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
                            ridiculus mus mauris vitae ultricies. Tristique senectus et netus et malesuada fames
                            ac turpis.
                            
                        </p>
                    </div>
                </div>
                <div className={"container__right-column"}>
                    <Stack spacing={3}>
                        <Paper className={"container__right-column__social-box"}>
                            <div className={"container__right-column__social-box__icon"}>
                                <AddCircleRounded fontSize={"large"}/>
                            </div>
                            <div className={"container__right-column__social-box__text"}>
                                <h2>ADD</h2>
                            </div>
                        </Paper>
                        
                        <Paper className={"container__right-column__social-box"}>
                            <div className={"container__right-column__social-box__icon"}>
                                <Twitter fontSize={"large"}/>
                            </div>
                            <div className={"container__right-column__social-box__text"}>
                                <h2>Twitter</h2>
                            </div>
                        </Paper>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default ProfileDataSection
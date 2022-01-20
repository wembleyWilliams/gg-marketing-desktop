import React, {useEffect, useState} from "react";
import "./index.scss";
import {Paper, Stack} from "@mui/material";
import {Add, AddCircleRounded, Twitter} from "@mui/icons-material";
// import HandleButtons from "../handle-buttons";
import handleButtons from "../handle-buttons";
import handleGenerator from "../../utils/handleGenerator";
import {useSelector} from "react-redux";
import {State} from "../../reducers";
import SocialMediaModal from "../common/social-media-modal";

interface Props {
  description: string,
}

const ProfileDataSection = (props: Props) => {
  const businessHandles: [{ socialMedia: string; profileName: string; profileUrL: string }] = useSelector(
    (state: State) => state.application.businessDetails?.businessHandles)
  const [open, setOpen] = useState(false)
  
  useEffect(()=>{
  
  },[open])
  
  const handleSocialMediaModal = () => {
    setOpen(true)
  }
  
  const handleCloseModal = () => {
    setOpen(false)
  }
  
  return (
    <div className={"data-wrapper"}>
      <div className={"container"}>
        <SocialMediaModal isOpen={open} handleClose={handleCloseModal}/>
        <div className={"container__left-column"}>
          <div className={"container__left-column__upload-section-wrapper"}>
            <div className={"container__left-column__upload-section-wrapper__upload-section-icon"}>
              <div className={"container__left-column__upload-section-wrapper__icon-background"}>
                <Add/>
              </div>
            </div>
            <div className={"container__left-column__upload-section-wrapper__upload-section-text"}>
              <b>UPLOAD IMAGE</b>
            </div>
          </div>
          <div className={"container__left-column__upload-section-wrapper__upload-section-description"}>
            <h2>Description</h2>
            <p>
              {props.description}
            </p>
          </div>
        </div>
        <div className={"container__right-column"}>
          <Stack spacing={3} maxWidth={"xs"}>
            <Paper onClick={handleSocialMediaModal} className={"container__right-column__social-box"}>
              <div className={"container__right-column__social-box__icon"}>
                <AddCircleRounded fontSize={"large"}/>
              </div>
              <div className={"container__right-column__social-box__text"}>
                <h2>ADD</h2>
              </div>
            </Paper>
            {businessHandles.map((value: any, index: number) => (
              <React.Fragment key={index}>
                <Paper className={"container__right-column__social-box"}>
                  <div className={"container__right-column__social-box__icon"}>
                {/*/!*   //TODO: Replace hardcoded string with businessHandles.map.value.icon*!/*/}
                    {handleGenerator(value.socialMedia)}
                  </div>
                  <div className={"container__right-column__social-box__text"}>
                    <h2>{value.socialMedia}</h2>
                  </div>
                </Paper>
              </React.Fragment>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default ProfileDataSection
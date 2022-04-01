import React, {useEffect, useState} from "react";
import "./index.scss";
import {Paper, Stack} from "@mui/material";
import {Add, AddCircleRounded, Twitter} from "@mui/icons-material";
import handleGenerator from "../../utils/handleGenerator";
import {useSelector} from "react-redux";
import {State} from "../../reducers";
import SocialMediaModal from "../common/social-media-modal";
import services from "../../services";
import {Logo} from "../../common/types";

interface Props {
  description: string,
}

const ProfileDataSection = (props: Props) => {
  const businessHandles: [{ socialMedia: string; profileName: string; profileUrl: string }] = useSelector(
    (state: State) => state.application.businessDetails?.businessHandles)
  const businessId = useSelector((state: State) => state.application.businessDetails?._id)
  const [open, setOpen] = useState(false)
  
  useEffect(()=>{
  
  },[open])
  
  const handleSocialMediaModal = () => {
    setOpen(true)
  }
  
  const handleCloseModal = () => {
    setOpen(false)
  }
  
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        let logo = reader.result.toString()
        let logoMime = logo.slice(5, 14);
        let temp = logo.split(',');
        let logoData = temp[1]
        
        let logoObject: Logo = {
          mime: logoMime,
          data: logoData
        }
        
        services.updateBusinessLogo(businessId, logoObject)
        
      }, false)
      if (file) {
        reader.readAsDataURL(file);
      }
  }
  
  return (
    <div className={"data-wrapper"}>
      <div className={"container"}>
        <SocialMediaModal isOpen={open} handleClose={handleCloseModal}/>
        <div className={"container__left-column"}>
          <div className={"container__left-column__upload-section-wrapper"}>
            <div className={"container__left-column__upload-section-wrapper__upload-section-icon"}>
              <div className={"container__left-column__upload-section-wrapper__icon-background"}>
                <Add onClick={ () => {
                  document.getElementById('pictureUpload').click();
                }}
                />
                <input
                  name='pictureUpload'
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={event => handleImageUpload(event)}
                  id='pictureUpload'
                  type="file"
                  className={"hide"}
                  />
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
            {/*Generated handles*/}
            {businessHandles.map((value: any, index: number) => (
              <React.Fragment key={index}>
                <Paper className={"container__right-column__social-box"}>
                  <div className={"container__right-column__social-box__icon"}>
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
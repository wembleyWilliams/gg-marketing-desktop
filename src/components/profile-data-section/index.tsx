import React, {useEffect, useState} from "react";
import "./index.scss";
import {Box, Grid, Paper, Stack} from "@mui/material";
import {Add, AddCircleRounded, Twitter} from "@mui/icons-material";
import handleGenerator from "../../utils/handleGenerator";
import {useSelector} from "react-redux";
import {State} from "../../reducers";
import SocialMediaModal from "../common/social-media-modal";
import services from "../../services";
import {Logo, businessHandle} from "../../common/types";
import {makeStyles} from "@mui/styles";
import HandleGenerator from "../../utils/handleGenerator";

interface Props {
  description: string,
  title?: string
}

const useStyles = makeStyles({
  handleBody: {
    textAlign: "center",
    justifySelf: "center",
  },
  sMHText: {
    textOverflow: "ellipsis",
    fontSize: 18,
    fontWeight: 700
  },
  sMHBackgroundPaper: {
    display: "flex",
    alignItems: "center",
    height: 80,
    borderRadius: 20,
    margin: "auto",
    justifyContent: "center",
    paddingBottom: "10px"
  },
  sMHBackgroundGrid: {
    margin: "auto",
  }
})

const ProfileDataSection = (props: Props) => {
  const businessHandles: [businessHandle] = useSelector(
    (state: State) => state.application.businessDetails?.businessHandles)
  const businessId = useSelector((state: State) => state.application.businessDetails?._id)
  const title = useSelector((state: State) => state.application.businessDetails?.title)
  const [open, setOpen] = useState(false)
  const [openSocialMediaListItemModal, setOpenSocialMediaListItemModal] = useState(false)
  const classes = useStyles();
  
  
  useEffect(() => {
  
  }, [open, openSocialMediaListItemModal])
  
  const handleSocialMediaListItemModal = (event: any, index: number) => {
    setOpenSocialMediaListItemModal(true)
    console.log(index)
  }
  
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
      
      let logoObject: any = {
        mime: logoMime,
        data: logoData
      }
      
      services
        .updateBusinessLogo(businessId, logoObject)
        .then((res) => {
          if (res) {
            //TODO: To be replace with the state update of Business Details Comp
            window.location.reload()
          }
        })
      
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
                <Add onClick={() => {
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
          <div className={"container__left-column__upload-section-wrapper__upload-section-title"}>
            <h2>Card Title/Name</h2>
            <p>
              {title}
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
                <Paper
                  className={classes.sMHBackgroundPaper}
                  onClick={event => handleSocialMediaListItemModal(event, index)}>
                  <Box sx={{flexGrow: 1}}>
                    <Grid container
                          className={classes.sMHBackgroundGrid}
                          spacing={3}
                          direction={"row"} alignItems={"center"}>
                      <Grid item xs={"auto"}>
                        <HandleGenerator handleName={value.socialMedia}/>
                      </Grid>
                      <Grid item xs={8}>
                        <p className={classes.sMHText}>
                          {value.profileName}
                        </p>
                      </Grid>
                    </Grid>
                  </Box>
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
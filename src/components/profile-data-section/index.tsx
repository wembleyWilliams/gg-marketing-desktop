import React, {useEffect, useState} from "react";
import "./index.scss";
import {Box, Container, Grid, IconButton, Paper, Stack} from "@mui/material";
import {Add, AddCircleRounded, Twitter} from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import {useSelector} from "react-redux";
import {State} from "../../reducers";
import SocialMediaModal from "../common/social-media-modal";
import services from "../../services";
import {Logo, businessHandle} from "../../common/types";
import {makeStyles} from "@mui/styles";
import HandleIconGenerator from "../common/HandleIconGenerator";
import SocialMediaListItemModal from "../common/social-media-list-item-modal";
import HandleGenerator from "../common/handle-generator";

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
    paddingBottom: "10px",
    width: "100%"
  },
  sMHBackgroundGrid: {
    margin: "auto",
  },
  cardTitleName: {
    backgroundColor: 'white',
    padding: '1rem',
    maxHeight: 320,
    maxWidth: 280,
    overflow: 'hidden',
    overflowY: 'scroll',
    scrollbarWidth: 'none'
  },
  cardDescription: {
    backgroundColor: 'white',
    padding: '1rem',
    maxHeight: 320,
    maxWidth: 280,
    overflow: 'hidden',
    overflowY: 'scroll',
    scrollbarWidth: 'none'
  },
  sectionWrapper: {
    paddingTop: '1rem',
    maxHeight: 500,
    width: '45vw'
  },
  sectionContainer: {
    height: '65vh',
  },
  leftColumn: {
    height: 'inherit',
    width: '50%'
  },
  rightColumn: {
    height: '65vh',
    maxWidth: 250,
    maxHeight: 'inherit',
    overflow: 'hidden',
    overflowY: 'scroll',
    scrollbarWidth:'none',
    padding: '1rem'
  }
  ,
  uploadSectionIcon: {
    display: 'flex',
    margin: 'auto',
    width: 110,
    height: 90,
    backgroundColor: '#EEEEE',
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center'
  },
  uploadSectionText: {
    width: 'max-content',
    margin: 'auto',
    fontSize: 20
  },
  iconBackground: {
    backgroundColor: '#EEEEE',
    padding: 5,
    borderRadius: 30
  },
  uploadSection: {
    display: 'flex',
    backgroundColor: 'EEE',
    padding: 5,
    borderRadius: 30,
    maxWidth: 299,
    width: '100%'
  },
  editableData: {
    padding: '1rem',
    borderRadius: 30,
    width: 'inherit'
  },
  editableDataTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hide: {
    display: 'none'
  }
})

const ProfileDataSection = (props: Props) => {
  const businessHandles: any = useSelector(
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
    <Grid container className={classes.sectionWrapper}>
      <Grid
        container
        className={classes.sectionContainer}
        direction={"column"}
      >
        <SocialMediaModal
          isOpen={open}
          handleClose={handleCloseModal}
        />
        <Grid container item className={classes.leftColumn} spacing={3} xs={6}>
          <Grid container item>
              <Container className={classes.uploadSection}>
                <Paper className={classes.uploadSectionIcon}>
                  <IconButton>
                    <Add onClick={() => {
                      document.getElementById('pictureUpload').click();
                    }}/>
                  </IconButton>
                </Paper>
                <input
                  name='pictureUpload'
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={event => handleImageUpload(event)}
                  id='pictureUpload'
                  type="file"
                  className={classes.hide}
                />
                <b className={classes.uploadSectionText} >UPLOAD IMAGE</b>
              </Container>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.editableData}>
              <Box className={classes.editableDataTitle}>
                <h2>Title Card</h2> <IconButton disableRipple><EditIcon/></IconButton>
              </Box>
              <p>
                {title}
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.editableData}>
              <Box className={classes.editableDataTitle}>
                <h2>Description</h2> <IconButton disableRipple><EditIcon/></IconButton>
              </Box>
              <p>
                {props.description}
              </p>
            </Paper>
          </Grid>
          
        </Grid>
        <Grid container item className={classes.rightColumn}>
          <Stack spacing={3} maxWidth={"xs"}>
            <Paper onClick={handleSocialMediaModal}
                   className={classes.sMHBackgroundPaper}>
              <Box sx={{flexGrow: 1}}>
                <Grid container
                      className={classes.sMHBackgroundGrid}
                      spacing={3}
                      direction={"row"} alignItems={"center"}>
                  <Grid item xs={"auto"}>
                    <AddCircleRounded fontSize={"large"}/>
                  </Grid>
                  <Grid item xs={"auto"}>
                    <p className={classes.sMHText}>
                      ADD LINK
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
            {businessHandles.map((value: any, index: number) => (
              <HandleGenerator
                index={index}
                handleTitle={value.socialMedia}
                handleName={value.profileName}
              />
            ))}
          </Stack>
        
        
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfileDataSection
import React, {useState} from "react";
import HandleIconGenerator from "../HandleIconGenerator";
import {makeStyles} from "@mui/styles";
import {Box, Grid, Paper} from "@mui/material";
import SocialMediaListItemModal from "../social-media-list-item-modal";

interface Props {
  index: number,
  handleTitle: string,
  handleName: string,
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
  }
})

const HandleGenerator = (props: Props) => {
  const classes = useStyles();
  const [openSocialMediaListItemModal, setOpenSocialMediaListItemModal] = useState(false)
  const [handleObject, setHandleObject] = useState(
    {
      index: 0,
      handleTitle: '',
      handleName:''
    }
  );
  const handleSocialMediaListItemModal = (event: any, index: number) => {
    setOpenSocialMediaListItemModal(true)
    setHandleObject({
      index: index,
      handleTitle: props.handleTitle,
      handleName: props.handleName
    })
  }
  
  const handleCloseSocialMediaListItemModal = () => {
    setOpenSocialMediaListItemModal(false)
  }
  
  return (
    <React.Fragment key={props.index}>
      <SocialMediaListItemModal
        isOpen={openSocialMediaListItemModal}
        handleClose={handleCloseSocialMediaListItemModal}
        handleObject={handleObject}
      />
      <Paper
        className={classes.sMHBackgroundPaper}
        onClick={event => handleSocialMediaListItemModal(event, props.index)}>
        <Box sx={{flexGrow: 1}}>
          <Grid container
                className={classes.sMHBackgroundGrid}
                spacing={3}
                direction={"row"} alignItems={"center"}>
            <Grid item xs={"auto"}>
              <HandleIconGenerator handleName={props.handleTitle}/>
            </Grid>
            <Grid item xs={8}>
              <p className={classes.sMHText}>
                {props.handleName}
              </p>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  )
}

export default HandleGenerator
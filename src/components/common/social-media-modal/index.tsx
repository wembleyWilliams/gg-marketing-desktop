import React, {MouseEventHandler, ReactEventHandler, useEffect, useState} from "react";
import "./index";
import {makeStyles} from "@mui/styles";
import Modal from '@mui/material/Modal';
import {
  Box, Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import handleIconGenerator from "../../../utils/handleGenerator";
import {Formik, FormikValues} from 'formik';
import {socialMediaSelectSchema} from "../../../utils/validation";
import services from "../../../services";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import {businessHandle} from "../../../common/types";
import log from "loglevel";

const localHandles = require("../../../localHandles.json");


interface Props {
  isOpen: boolean,
  handleClose: any,
  userBusinessHandles?: any
}

const useStyles = makeStyles({
  root: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    height: 'max-content',
    backgroundColor: '#FFF',
    borderRadius: '20px',
    padding: '2rem',
    // overflowY: 'scroll',
    // msOverflowStyle: 'none'
  },
  gridItem: {
    padding: '7px',
    textAlign: 'center',
    margin: '20px'
  },
  paper: {
    textAlign: 'center',
    minWidth: 100,
    maxWidth: 140,
    padding: '1rem'
  },
  paperContent: {
    transform: 'scale(1.2)'
  },
  tileModal: {
    width: 200,
    height: 200
  },
  icons: {},
  helperText: {
    fontFamily: 'canada-type-gibson, sans-serif',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.3)',
    fontSize: '10px',
    textTransform: 'uppercase'
  },
  helperErrorText: {
    color: '#ff0033',
    fontSize: '10px',
    textTransform: 'uppercase'
  },
  handleContainer: {
    margin: 'auto',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 400,
    width: 340,
    backgroundColor: '#FFF',
    borderRadius: '20px',
    padding: '1rem',
  },
  handleTitleText: {
    margin: 'auto',
    textAlign: 'center'
  },
  form: {
    width: 300,
    height: 280,
    display: "inline-grid",
    rowGap: 20,
    padding: "1rem"
  },
  formControl: {
    padding: '1rem'
  },
  formTitle: {
    justifyItems: 'center',
    margin: "auto"
  }
  
})


const SocialMediaModal = (props: Props) => {
  const classes = useStyles();
  //TODO: Ensure the handles that are already in the user's list can be filtered
  let userHandles = props.userBusinessHandles
  const [openTileModal, setOpenTileModal] = useState(false)
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('')
  const [localIsOpen, setLocalIsOpen] = useState(true)
  const businessId = useSelector(
    (state: State) => state.application.businessDetails?._id)
  
  useEffect(()=>{
  
  },[])
  
  const handleClick = (event: any, socialMedia: string) => {
    setSelectedSocialMedia(socialMedia)
  }
  
  const handleSubmit = async (values: any) => {
    let data = {
      ...values,
      socialMedia: selectedSocialMedia
    };
    
    services
      .updateBusinessHandles(businessId, data)
      .then((res) => {
        setSelectedSocialMedia(null)
        return res
      })
      .catch((err) => {
        log.error(err)
      })
  }
  
  const handleBack = (event: any) => {
    setSelectedSocialMedia(null)
    setLocalIsOpen(false)
  }
  
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
    >
      <Box className={classes.root}>
        <div className={'modal-container'}>
          {selectedSocialMedia ? null : (
            <div>
              <IconButton onClick={props.handleClose}>
                <ArrowBack fontSize={"large"}/>
              </IconButton>
              
              <Typography className={classes.handleTitleText}>
                <h1>Select another link entry</h1>
              </Typography>
            </div>
          )}
          
          {selectedSocialMedia ? (
            <Box className={classes.handleContainer}>
              {/*Produces icon*/}
              <Stack className={classes.formTitle}
                     direction={"row"} spacing={4} alignItems={"center"}>
                <IconButton onClick={handleBack}>
                  <ArrowBack fontSize={"large"}/>
                </IconButton>
                {handleIconGenerator(selectedSocialMedia)}
                <h1>{selectedSocialMedia}</h1>
              </Stack>
              
              
              <Formik
                initialValues={{
                  profileName: '',
                  profileUrl: ''
                }}
                
                validationSchema={socialMediaSelectSchema}
                
                onSubmit={(values) => {
                  handleSubmit(values)
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                  }) => (
                  <form onSubmit={handleSubmit} className={classes.form}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Handle</InputLabel>
                      <Input
                        id="profileName"
                        name="profileName"
                        value={values.profileName}
                        onChange={event => handleChange(event)}
                        placeholder={"What's your handle?"}
                      />
                      
                      <FormHelperText
                        className={touched.profileName && errors.profileName ? classes.helperErrorText : classes.helperText}>
                        {touched.profileName && errors.profileName ? errors.profileName :
                          'Enter your media handle'}
                      </FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Profile Link</InputLabel>
                      <Input
                        id="profileUrl"
                        name="profileUrl"
                        value={values.profileUrl}
                        onChange={event => handleChange(event)}
                        placeholder={"What's your profile link?"}
                      />
                      
                      <FormHelperText
                        className={touched.profileUrl && errors.profileUrl ? classes.helperErrorText : classes.helperText}>
                        {touched.profileUrl && errors.profileUrl ? errors.profileUrl :
                          'Enter your profile link'}
                      </FormHelperText>
                    </FormControl>
                    <Button type={"submit"}>
                      Save
                    </Button>
                  </form>
                )}
              </Formik>
            
            </Box>
          ) : (
            <Grid container className={'modal-container__body'}>
              
              
              {localHandles.map((value: any, index: number) => (
                <Grid item className={classes.gridItem} key={index}>
                  <Paper onClick={event => handleClick(event, value.socialMedia)} className={classes.paper}>
                    
                    <div className={classes.paperContent}>
                      {handleIconGenerator(value.socialMedia)}
                      <h2>{value.socialMedia}</h2>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )
          }
        </div>
      </Box>
    </Modal>
  
  
  )
  
}

export default SocialMediaModal
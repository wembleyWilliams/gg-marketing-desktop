import React, {MouseEventHandler, ReactEventHandler, useEffect, useState} from "react";
import "./index";
import {makeStyles} from "@mui/styles";
import Modal from '@mui/material/Modal';
import {
  Box, Button, Container,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel, MenuItem,
  Paper, Select,
  Stack,
  Typography
} from "@mui/material";
import {ArrowBack, CheckCircle} from "@mui/icons-material";
import handleIconGenerator from "../HandleIconGenerator";
import {Formik, FormikValues} from 'formik';
import {socialMediaSelectSchema, updateMediaHandle} from "../../../utils/validation";
import services from "../../../services";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import CloseIcon from '@mui/icons-material/Close';
import {businessHandle} from "../../../common/types";
import log from "loglevel";
import HandleGenerator from "../handle-generator";

const localHandles = require("../../../localHandles.json");


interface Props {
  isOpen: boolean,
  handleClose: any,
  handleObject: { index: number, handleTitle: string, handleName: string }
}

const useStyles = makeStyles({
  root: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20vw',
    height: 'max-content',
    backgroundColor: '#FFF',
    borderRadius: '20px',
    padding: '2rem',
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
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  },
  
  submit: {
    display: "flex",
    justifyContent: "end",
    paddingTop: 20
  }
  
})

const SocialMediaListItemModal = (props: Props) => {
  const classes = useStyles();
  //TODO: Ensure the handles that are already in the user's list can be filtered
  // let userHandles = props.userBusinessHandles
  const [openTileModal, setOpenTileModal] = useState(false)
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('')
  const [localIsOpen, setLocalIsOpen] = useState(true)
  const [link, setLink] = useState('');
  const businessId = useSelector(
    (state: State) => state.application.businessDetails?._id)
  
  useEffect(() => {
  
  }, [])
  
  const handleChange = (event: any) => {
    setLink(event.target.value)
  }
  
  const handleClick = (event: any, socialMedia: string) => {
    setSelectedSocialMedia(socialMedia)
  }
  
  const handleSubmit = (values: any) => {
    let data = {
      index: props.handleObject?.index,
      ...values
    };
    
    console.log(data)
    // services
    //   .addBusinessHandle(businessId, data)
    //   .then((res) => {
    //     setSelectedSocialMedia(null)
    //     return res
    //   })
    //   .catch((err) => {
    //     log.error(err)
    //   })
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
      <Box className={classes.root}
           sx={{flexGrow: 1}}
      >
        <Stack spacing={3}>
          
          <div className={classes.dialogTitle}>
            <p>Close</p>
            <IconButton onClick={props.handleClose}>
              <CloseIcon/>
            </IconButton>
          </div>
          
          <HandleGenerator
            index={props.handleObject?.index}
            handleTitle={props.handleObject?.handleTitle}
            handleName={props.handleObject?.handleName}
          />
          
          <Formik
            initialValues={{
              link_profile_name: '',
              linkType: '',
              linkUrl: '',
            }}
            validationSchema={updateMediaHandle()}
            onSubmit={(values) => {
              handleSubmit(values)
            }}>
            {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange
              }) => (
              
              <form onSubmit={handleSubmit}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="links-label">Link Type</InputLabel>
                  <Select
                    labelId="links-label"
                    id="linkType"
                    name="linkType"
                    label="Link Types"
                    value={values.linkType}
                    onChange={event => handleChange(event)}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={'Twitter'}>Twitter</MenuItem>
                    <MenuItem value={'Facebook'}>Facebook</MenuItem>
                    <MenuItem value={'Instagram'}>Instagram</MenuItem>
                    <MenuItem value={'YouTube'}>YouTube</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                  </Select>
                </FormControl>
                <FormHelperText
                  className={touched.linkType && errors.linkType ? classes.helperErrorText : classes.helperText}>
                  {touched.linkType && errors.linkType ? errors.linkType :
                    'Select your media type'}
                </FormHelperText>
                <FormControl variant="standard" fullWidth>
                  <InputLabel>Link Title/Profile Name</InputLabel>
                  <Input
                    id="link_profile_name"
                    name="link_profile_name"
                    value={values.link_profile_name}
                    onChange={event => handleChange(event)}
                  />
                </FormControl>
                <FormHelperText
                  className={touched.link_profile_name && errors.link_profile_name ? classes.helperErrorText : classes.helperText}>
                  {touched.link_profile_name && errors.link_profile_name ? errors.link_profile_name :
                    'Enter your link title/profile name'}
                </FormHelperText>
                <FormControl variant="standard" fullWidth>
                  <InputLabel>Profile Link</InputLabel>
                  <Input
                    id="linkUrl"
                    name="linkUrl"
                    value={values.linkUrl}
                    onChange={event => handleChange(event)}
                  />
                </FormControl>
                <FormHelperText
                  className={touched.linkUrl && errors.linkUrl ? classes.helperErrorText : classes.helperText}>
                  {touched.linkUrl && errors.linkUrl ? errors.linkUrl :
                    'Enter your link URL'}
                </FormHelperText>
                
                <Box className={classes.submit} sx={{flexGrow: 1}}>
                  <IconButton type={"submit"} disableRipple>
                    <Typography>
                      <p>Submit</p>
                    </Typography>
                    <CheckCircle  sx={{color: '#32CD32'}} fontSize={"large"}/>
                  </IconButton>
                </Box>
                
              </form>
            )}
          </Formik>
        
        
        </Stack>
      </Box>
    </Modal>
  
  
  )
  
}

export default SocialMediaListItemModal
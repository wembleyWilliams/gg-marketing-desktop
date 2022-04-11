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
  InputLabel, MenuItem,
  Paper, Select,
  Stack,
  Typography
} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import handleIconGenerator from "../HandleIconGenerator";
import {Formik, FormikValues} from 'formik';
import {socialMediaSelectSchema} from "../../../utils/validation";
import services from "../../../services";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import CloseIcon from '@mui/icons-material/Close';
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
    justifyContent: "space-between",
    alignItems: "center"
  }
  
})


const SocialMediaListItemModal = (props: Props) => {
  const classes = useStyles();
  //TODO: Ensure the handles that are already in the user's list can be filtered
  let userHandles = props.userBusinessHandles
  const [openTileModal, setOpenTileModal] = useState(false)
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('')
  const [localIsOpen, setLocalIsOpen] = useState(true)
  const [link, setLink] = useState('');
  const businessId = useSelector(
    (state: State) => state.application.businessDetails?._id)
  
  useEffect(()=>{
  
  },[])
  
  const handleChange = (event: any) => {
    setLink(event.target.value)
  }
  
  const handleClick = (event: any, socialMedia: string) => {
    setSelectedSocialMedia(socialMedia)
  }
  
  const handleSubmit = (values: any) => {
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
      <Box className={classes.root}
        sx={{flexGrow: 1}}
      >
        <Typography className={classes.dialogTitle}>
          <h1>Edit Link</h1>
          <IconButton onClick={props.handleClose}>
            <CloseIcon />
          </IconButton>
        </Typography>
        
        <Formik
          initialValues={{
            links: '',
            linkUrl:'',
          }}
          onSubmit={(values)=>{
            handleSubmit(values)
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange
          })=>(
            <form onSubmit={handleSubmit}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="links-label">Link Labels</InputLabel>
                <Select
                  labelId="links-label"
                  id="links"
                  name="links"
                  label="Link Types"
                  value={values.links}
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
                className={touched.links && errors.links ? classes.helperErrorText : classes.helperText}>
                {touched.links && errors.links ? errors.links :
                  'Enter your media handle'}
              </FormHelperText>
              
              <FormControl variant="standard" fullWidth>
                <InputLabel>Profile Link</InputLabel>
                <Input
                  id="linkUrl"
                  name="linkUrl"
                  value={values.linkUrl}
                  onChange={event => handleChange(event)}
                  placeholder={"What's your profile link?"}
                />
              </FormControl>
              <FormHelperText
                className={touched.linkUrl && errors.linkUrl ? classes.helperErrorText : classes.helperText}>
                {touched.linkUrl && errors.linkUrl ? errors.linkUrl :
                  'Enter your profile link'}
              </FormHelperText>
            </form>
          )}
        </Formik>
        
      </Box>
    </Modal>
  
  
  )
  
}

export default SocialMediaListItemModal
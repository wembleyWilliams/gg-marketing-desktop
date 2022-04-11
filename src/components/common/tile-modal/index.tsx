import Modal from "@mui/material/Modal";
import {Box, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import handleIconGenerator from "../HandleIconGenerator";
import React from "react";
import {makeStyles} from "@mui/styles";


interface Props {
  isOpen: boolean,
  handleClose: any,
  socialMedia: string
}

const useStyles = makeStyles({
  root: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: '20px',
    padding: '2rem',
    // overflowY: 'scroll',
    // msOverflowStyle: 'none'
  },
  helperText: {
    fontFamily: 'canada-type-gibson, sans-serif',
    fontStyle: 'normal',
    color: 'rgba(0,0,0,0.3)',
    fontSize: '10px',
    textTransform: 'uppercase'
},
  helperErrorText:{
    color: '#ff0033',
    fontSize: '10px',
    textTransform: 'uppercase'
  }
})

const TileModal = (props: Props) => {
  const classes = useStyles();
  
  const handleSubmit = () =>{
  
  }
  
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
    >
    <></>
    </Modal>
    )
}

export default TileModal
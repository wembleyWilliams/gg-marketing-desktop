import React from "react";
import "./index";
import Modal from '@mui/material/Modal';

interface Props {
  isOpen: boolean,
  handleClose: any
}

const SocialMediaModal = (props: Props) => {
  
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
    >
      {/*<div className={'wrapper'}>*/}
        <div className={'container'}>
        
        </div>
      {/*</div>*/}
    </Modal>
    )
  
}

export default SocialMediaModal
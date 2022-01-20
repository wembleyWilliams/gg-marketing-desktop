import React from "react";
import {
  Facebook,
  Instagram, LinkedIn,
  Twitter
} from "@mui/icons-material";

const handleGenerator = (handleName: string) => {
  switch(handleName){
    case 'Twitter':
      return <><Twitter fontSize={'large'}/></>
      break;
    case 'Facebook':
      return <><Facebook fontSize={'large'}/></>
      break;
    case 'Instagram':
      return <><Instagram fontSize={'large'}/></>
      break;
    case 'LinkedIn':
      return <><LinkedIn fontSize={'large'}/></>
     break;
  }
}

export default handleGenerator
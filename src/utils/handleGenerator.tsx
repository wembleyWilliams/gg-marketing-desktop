import React from "react";
import {
  Facebook,
  Instagram, LinkedIn,
  Twitter, YouTube, InsertLink
} from "@mui/icons-material";
// import SnapchatGhost from "@emotion-icons/fa-brands/SnapchatGhost"

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
    // case 'Snapchat':
    //   return <><SnapchatGhost/></>
    //   break;
    case 'YouTube':
      return <><YouTube fontSize={'large'}/></>
      break;
    default:
      return <><InsertLink fontSize={'large'}/></>
      break;
  }
}

export default handleGenerator
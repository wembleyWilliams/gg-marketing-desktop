import React from "react";
import {
  Facebook,
  Instagram, LinkedIn,
  Twitter, YouTube, InsertLink
} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
// import SnapchatGhost from "@emotion-icons/fa-brands/SnapchatGhost"

const useStyles = makeStyles({
  icon:{
    transform: "scale(1.6)",
  },
  
})

const HandleGenerator = (handleName: any) => {
  const classes = useStyles();
  
  switch(handleName.handleName){
    case 'Twitter':
      return <><Twitter
        sx={{color: '#1DA1F2'}}
        className={classes.icon} fontSize={'large'}/></>
      break;
    case 'Facebook':
      return <><Facebook
        sx={{color: '#4267B2'}}
        className={classes.icon}fontSize={'large'}/></>
      break;
    case 'Instagram':
      return <><Instagram
        sx={{color: '#1DA1F2'}}
        className={classes.icon} fontSize={'large'}/></>
      break;
    case 'LinkedIn':
      return <><LinkedIn
        sx={{color: '#0072b1'}}
        className={classes.icon} fontSize={'large'}/></>
     break;
    // case 'Snapchat':
    //   return <><SnapchatGhost/></>
    //   break;
    case 'YouTube':
      return <><YouTube
        sx={{color: '#c4302b'}}
        className={classes.icon} fontSize={'large'}/></>
      break;
    default:
      return <><InsertLink
        sx={{color: '#3c3c3c'}}
        className={classes.icon} fontSize={'large'}/></>
      break;
  }
}

export default HandleGenerator
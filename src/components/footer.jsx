import React, { Component } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Link
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root:{
 "& .MuiButtonNavigationAction-root":{
     minwidth:0,
     maxwidth:250,
 },
 "& .MuiSvgIcon-root":{
     fill:"tan",
     "&:hover":{
         fill:"tomato",
         fontSize:"1.8rem"

     }
 }
    }
})
const Footer = () => {
    const classes= useStyles()
  return (
    <BottomNavigation style={{ background: "#222", width: "auto" }}>
      <Link
      target="_blank"
      href="https://www.linkedin.com/in/dedanmsafari-2019"
       className={classes.root}
       style={{padding: 15 }}
      >
      <LinkedInIcon/>
      </Link>
      <Link
      target="_blank"
      href="https://github.com/dedanmsafari"
       className={classes.root}
       style={{padding: 15 }}
      >
      <GitHubIcon/>
      </Link>
     
      <Link
      target="_blank"
      href="https://www.instagram.com/dedan_eleven/"
       className={classes.root}
       style={{padding: 15 }}
      >
      <InstagramIcon/>
      </Link>
      
      <Link
      target="_blank"
      href="mailto:dedan.msafari@gmail.com"
       className={classes.root}
       style={{padding: 15 }}
      >
      <EmailIcon/>
      </Link>
      


    </BottomNavigation>
  );
};

export default Footer;

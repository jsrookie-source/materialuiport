import React from "react";
import { Typography, Avatar, Grid, Box, makeStyles } from "@material-ui/core";
import avatarimage from "../images/avatarimage.jpg";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer:{
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      width:"100vw",
      textAlign:"center",
      zIndez: 1

  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.typedContainer}>
          <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatarimage}
          alt="Dedan Msafari"
        />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["Building the products you'll love"]}
            typeSpeed={50}
          />
        </Typography>
        <br />

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Web Development",
              "Web Design",
              "MERN Stack",
              "Redux",
              "Sass",
              "Material-UI",
              "Docker",
              "Github and Version Control"
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;

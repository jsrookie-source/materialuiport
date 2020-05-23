import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  root: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
  }
}));
const NotFound = () => {
  const classes=useStyles()
  return (
    <Box className={classes.root}>

      <Typography variant="h2"  color="secondary" >Error 404(Not found)</Typography>
      <Typography variant="h4"  className={classes.button}>Sorry,the page you are looking for does not exist</Typography>
      <Typography variant="h6"  className={classes.button}>It might be that you typed something incorrectly</Typography>

    </Box>

  
  );
};

export default NotFound;

import React from "react";
import {
  Typography,
  makeStyles,
  Box
} from "@material-ui/core";
import NavBar from "./navBar";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0  auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      borderStyle: " solid ",
      borderColor: " tomato tomato transparent transparent ",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.025rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontsize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: " 0 auto"
      },
      "&:nth-of-type(2n): before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h4"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Jr.Web Developer ( ATTACHMENT )
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Ongair
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Worked under minimal supervision in a SAAS company working in both
              front end and backend development using react and ruby on rails
            </Typography>
          </Box>

          {/* <Box component="div" className={classes.timeLine}> */}
          <Typography
            variant="h4"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Final Year Project
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Egerton University
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Worked in close contact with my supervisor to build a movie rental
              API using the MERN stack
            </Typography>
          </Box>
          <Typography
            variant="h4"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            NOW
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              POST UNIVERSITY
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              FREELANCE DEVELOPER
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Working to increase my knowledge on React and redux and diving
              into some server-side technologies.
              <br />
              (ACTIVELY ACCEPTING A WIDE VARIETY SOFTWARE DEVELOPMENT TASKS )
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;

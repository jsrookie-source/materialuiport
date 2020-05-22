import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  ArrowBack,
  Home,
  Apps,
  AssignmentInd,
  ContactMail
} from "@material-ui/icons";
import avatarimage from "../images/avatarimage.jpg";
import Footer from "./footer";
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "1.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  }
];
const NavBar = () => {
  const classes = useStyles();

  //initialize direction and state to right.
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [slider]: open });
  };

  const sideList = slider => (
    <Box
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
      component="div"
    >
      <Avatar
        className={classes.avatar}
        src={avatarimage}
        alt="Dedan Msafari"
      />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography style={{ color: "tan" }} variant="h5">
              {" "}
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              onClose={toggleSlider("right", false)}
              open={state.right}
            >
              {sideList("right")}
              <Footer/>
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;

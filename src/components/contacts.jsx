import React from "react";
import {
  Box,
  makeStyles,
  TextField,
  Typography,
  Button,
  Grid,
  Input
} from "@material-ui/core";
import Particles from 'react-particles-js';
import { withStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import NavBar from "./navBar";
const useStyles = makeStyles(theme =>({
    form: {
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        position:"absolute"
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
}))
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato"
    },
    "& label": {
      color: "tan"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "tomato"
      }
      // "& .Mui-focused fieldset":{
      //     borderColor:"blue",
      // }
    }
  }
})(TextField);

const Contacts = () => {
    const classes = useStyles()
  return (
    <Box component="div"style={{background:"#233",height:"120vh"}}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5"  color="secondary" style={{ textTransform:"uppercase"}} >Hire or contact me...</Typography>
          <InputField
            fullWidth={true}
            label="name"
            inputProps={{style:{color:"white"}}}
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            inputProps={{style:{color:"white"}}}
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Campany Name/Address"
            variant="outlined"
            inputProps={{style:{color:"white"}}}
            margin="dense"
            size="medium"
      
          />
          <br />
          <InputField
          label="Brief description/enquiry"
          inputProps={{style:{color:"white"}}}
          fullWidth={true}
          multiline
          margin="dense"
          rows={5}
          size="medium"
          variant="outlined"
        />
          <Button variant="outlined"  className={classes.button} endIcon={<Send/> }  fullWidth={true}>Contact me</Button>
        </Box>
      </Grid>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 700
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
    </Box>
  );
};

export default Contacts;

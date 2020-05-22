import React from 'react'
import Header from './header';
import Particles from 'react-particles-js';
import NavBar from './navBar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCover:{
      position:"absolute",
      opacity:"0.5"
    }
  })
const Home = () => {
    const classes = useStyles()
    return ( 
      <>
      <NavBar/>
  <Header/>
  <Particles
  canvasClassName={classes.particlesCover}
    // params={{particles:{number:{value: 75}}}}
    params={{
	    "particles": {
	        "number": {
                "value": 50               
	        },
	        "size": {
	            "value": 3
            },
            shape:{
                type:'circle',
                stroke:{
                    width:0.1,
                    color:"red"
                }
            }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
    />
      </>
     );
}
 
export default Home;
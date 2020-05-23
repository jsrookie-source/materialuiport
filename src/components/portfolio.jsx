import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  Card,
  CardHeader,
  Grid,
  makeStyles,
  Button,
  Link
} from "@material-ui/core";
import NavBar from "./navBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from '@material-ui/icons/Instagram';
import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.jpeg";
import p4 from "../images/p4.jpg";
import p0 from "../images/p0.jpeg";
const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    //  margin:"3rem",
    margin: "5rem auto"
  }
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <NavBar />
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project1"
                  height="140"
                  image={p1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project ( API Linking)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This project taught me how to link to any popular
                    backend-api.As it is a fundamental concept for front-end
                    programmers I used the famous pokeapi that returns an array
                    of objects concerning every known pokemon made by the
                    Nintendo industry. A starter pack gallery for any pokemon
                    fan!{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  target="_blank"
                  href="https://github.com/jsrookie-source/pokedexagain"
                  style={{ padding: 15 }}
                >
                  <GitHubIcon />
                </Link>
                <Button
                component="a"
                  target="_blank"
                  href="https://pockedexapp.herokuapp.com/pokedex"
                  style={{ padding: 15 }}
                >
                Live Demo
                </Button>
            
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project2"
                  height="140"
                  image={p2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project (PORTFOLIO)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                 This project(the current website your viewing). was to help me learn material-ui concepts through actually coding
                 The site itself was made by react using recent concepts such as react-hooks.It's helped me alot in solidifying my understanding of react
                 NB:I wont give the github link as it has sensitive api keys that i am yet to hide(No pun intended!).
                 You can however click the instagram icon to show some love on some of my pics.A rather unworthy substitute for the git repo
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Link
      target="_blank"
      href="https://www.instagram.com/dedan_eleven/"
       style={{padding: 15 }}
      >
      <InstagramIcon/>
      </Link>
                <Button size="small" color="primary">
                  Live Demo(your in it!)
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project3"
                  height="140"
                  image={p3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project (HTML AND SASS)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  This project was a simple portfolio to teach me the fundamentals of sass and how it adds superpowers to the CSS echo-system.
                  it was the predecesor to this site but has not yet been deployed.it has since been moved to my personal code archive!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Link
                  target="_blank"
                  href="https://github.com/dedanmsafari/Portfolio"
                  style={{ padding: 15 }}
                >
                  <GitHubIcon />
                </Link>
               
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project4"
                  height="140"
                  image={p4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project (MOVIE-RENTAL SITE)[NOT NETFLIX!]
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is the Mona Lisa of all my current work.A rental application built using the MERN stack.
                    It was also my first deepdive into the react echosystem and was my final year project.Its helped me understand alot about routing,authentication and calling backend services.
                    It is free if you want to edit or make any modifications to it.(Just give it a github star while at it)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Link
                  target="_blank"
                  href="https://github.com/dedanmsafari/MalKia"
                  style={{ padding: 15 }}
                >
                  <GitHubIcon />
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project0"
                  height="140"
                  image={p0}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    CURRENT (REDUX STORE) A
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                 Currently under construction.this will be a store created using redux.Come back in a few weeks and i will have completed it!

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;

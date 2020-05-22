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
  Button
} from "@material-ui/core";
import NavBar from "./navBar";
import  p1  from "../images/p1.jpeg";
import  p2  from "../images/p2.jpeg";
import  p3  from "../images/p3.jpeg";
import  p4  from "../images/p4.jpg";
import  p0  from "../images/p0.jpeg";
const useStyles= makeStyles({
mainContainer:{
    background:"#233",
    height:"100%"
},
cardContainer:{
    maxWidth: 345,
   //  margin:"3rem",
     margin: "5rem auto"
}
})
const Portfolio = () => {
    const classes=useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <NavBar />
        <Grid container justify="center" >
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
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet est facilis non nemo recusandae ducimus voluptatibus
                    consectetur modi consequatur fuga itaque soluta, veniam
                    cupiditate fugiat. Cumque eaque nam porro deserunt?
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
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
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet est facilis non nemo recusandae ducimus voluptatibus
                    consectetur modi consequatur fuga itaque soluta, veniam
                    cupiditate fugiat. Cumque eaque nam porro deserunt?
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
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
                  alt="project3"
                  height="140"
                  image={p3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet est facilis non nemo recusandae ducimus voluptatibus
                    consectetur modi consequatur fuga itaque soluta, veniam
                    cupiditate fugiat. Cumque eaque nam porro deserunt?
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                  Live Demo
                  </Button>
                </CardActions>
            </Card>
            </Grid >
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
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet est facilis non nemo recusandae ducimus voluptatibus
                    consectetur modi consequatur fuga itaque soluta, veniam
                    cupiditate fugiat. Cumque eaque nam porro deserunt?
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                  Live Demo
                  </Button>
                </CardActions>
            </Card>
            </Grid >
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
                    Project 5
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet est facilis non nemo recusandae ducimus voluptatibus
                    consectetur modi consequatur fuga itaque soluta, veniam
                    cupiditate fugiat. Cumque eaque nam porro deserunt?
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                  Live Demo
                  </Button>
                </CardActions>
            </Card>
            </Grid>
          </Grid>
      </Box>
    </>
  );
};

export default Portfolio;

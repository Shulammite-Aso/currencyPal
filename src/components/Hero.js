import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../img/world-map.png";

const useStyles = makeStyles({
  header: {
    color: "white",
    fontSize: "2.5rem",
    marginBottom: "5rem"
  },
  date: {
    color: "white",
    backgroundColor: "#016a9e",
    paddingBottom: "0.8rem",
    paddingTop: "0.8rem",
    margin: "auto",
    width: "9.5rem",
    zIndex: "2"
  },
  hero: {
    paddingBottom: "7rem",
    paddingTop: "4em",
    boxSizing: "inherit",
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0)),
    url(${Image});`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    width: "100%"
  }
});

const Hero = () => {

  let date = new Date();

  const classes = useStyles();
    return (
      <Container className={classes.hero}>
        <Grid container justify="center">
        <Grid item xs={9} >
        <Typography className={classes.header} gutterBottom variant="h3" align="center">
          Welcome to CurrencyPal. Your handy live currency conversion and exchange rate web app.
        </Typography>
        </Grid>
        </Grid>
        <Typography className={classes.date} align="center" variant="subtitle2">
          {date.toDateString()}
          </Typography>
        </Container>
      
    );
    
}

export default Hero;
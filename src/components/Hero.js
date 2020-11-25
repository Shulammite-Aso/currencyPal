import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../img/world-map.png";

const useStyles = makeStyles({
  header: {
    color: "white",
    fontSize: "300%",
    width: "100%"
  },
  date: {
    color: "white",
    backgroundColor: "#016a9e",
    paddingBottom: "0.8rem",
    paddingTop: "0.8rem",
    margin: "auto",
    //padding: "0, 1.5rem, 0, 1.5rem",
    width: "12em",
    zIndex: "2"
  },
  hero: {
    paddingBottom: "1em",
    width: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${Image});`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    animation: "mymove 7s infinite"
  }
});

const Hero = () => {

  let date = new Date();

  const classes = useStyles();
    return (
      <Container className={classes.hero}>
        <Typography className={classes.header} gutterBottom variant="h3" align="center">
          Welcome to CurrencyPal. Your handy live currency conversion and exchange rate web app.
        </Typography>
        <Typography className={classes.date} align="center" variant="subtitle2">
          {date.toDateString()}
          </Typography>
        </Container>
      
    );
    
}

export default Hero;
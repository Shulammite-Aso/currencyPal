import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import Convert from "./Convert";
import Hero from "./Hero";
import logo from "../img/CurrencyPal.svg";

const useStyles = makeStyles((theme) => ({

  page: {
    backgroundColor: "black",
    [theme.breakpoints.down("xs")]: {
      minWidth: "25rem"
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "50rem",
    }
    },

    appBar: {
      backgroundColor: "black"
    },

    img: {
      maxWidth: "8.5rem"
    },

    footer: {
      fontSize: "1rem",
      color: "white",
      display: "grid",
      placeItems: "center",
      padding: "2rem"
    }

}));

const App = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
      
        <div className={classes.page}>
          <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
              <img src={logo} className={classes.img} alt="logo"/>
            </Toolbar>
          </AppBar>
          <Hero />
          <Convert />
          <footer  className={classes.footer}> <p><small>© 2021. Made with ❤ and Reactjs.</small></p>
          </footer>
        </div>
    </React.Fragment>    
    )
}

export default App;
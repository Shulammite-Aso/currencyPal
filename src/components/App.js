import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Convert from './Convert';
import Hero from './Hero';

const useStyles = makeStyles({
  page: {
    backgroundColor: "black",
    height: "100% !important"
  }
});

const App = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.page}>
          <Hero />
          <Convert />
        </div>
    </React.Fragment>    
    )
}

export default App;
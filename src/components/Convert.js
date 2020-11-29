import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Select from './Select'

const useStyles = makeStyles((theme) => ({
  paper: {
    
    margin: "auto",
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "90%"
    },
    [theme.breakpoints.up("md")]: {
      width: "80%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "67%"
    },
    //maxWidth: "75%", 
    
  },
  input: {
    border: "3px solid #016a9e",
    backgroundColor: "#5BADD640",
    padding: "0.7rem"
  },
  secondHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1em"
  },
  convertBox: {
    width: "20em",
    [theme.breakpoints.up("sm")]: {
      width: "13em"
    },
    [theme.breakpoints.up("lg")]: {
      width: "17em"
    },
  }
}));

 function Convert() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("AUD");
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const API_KEY = "";

  // Make fetch request and set ExchangeRate only when any of the currency selections changes.
 useEffect( () => {
  fetch(`https://free.currconv.com/api/v7/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
     var exRate = data[Object.keys(data)[0]];
     setExchangeRate(exRate);
  })  
 }, [currencyFrom, currencyTo]

);

// When it is only amount or exchangeRate that changed, it should only multply the amount with the current exchange rate
 useEffect( () => {
  setResult(exchangeRate * amount);
 }, [exchangeRate, amount])

 const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0} >
      <Grid container spacing={3} >
        <Grid item xs={12} sm={4}>
        
          <div className={classes.convertBox}>
            <Typography className={classes.secondHeading} variant="h2">
              Currency Converter
            </Typography>
            <Typography variant="subtitle1">
              Choose the currency you want to convert from and to, then type in the amount.
            </Typography>
            </div>  
        
        </Grid>

         <Grid item xs={12} sm={4}>
           <div className={classes.convertBox}>
              <Grid container spacing={4}> 
               <Grid item xs={6} sm={6}>
                  <Select
                    currId={"curFrom"}
                    text={"FROM"}
                    value={currencyFrom}
                    onChange={(e) => {
                    setCurrencyFrom(e.target.value);
                    } } 
                 />
               </Grid>

               <Grid item xs={6} sm={6}>
                  <Select
                    className={classes.data}
                    currId={"curTo"}
                    text={"TO"}
                    value={currencyTo}
                    onChange={(e) => {
                      setCurrencyTo(e.target.value);
                    } } 
                  />
               </Grid>   
             
               <Grid item xs={12} > 
                  <p>{exchangeRate}</p>
               </Grid>
            </Grid>
          </div>
        </Grid>
 
       <Grid item xs={12} sm={4}>
         <div className={classes.convertBox}>
           <p><small>AMOUNT</small></p>
           <input type="number" className={classes.input} value={amount}
                 
                 onChange={(e) =>{
                      setAmount(e.target.value);
                  } }
           />
           <h2>{result}</h2>
           </div>
       </Grid>
      </Grid>
    </Paper>
  );

}

export default Convert;
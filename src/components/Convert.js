import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';

import Select from './Select'

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

  return (
    <Paper elevation={0} >
      <div>
         <Select
           currId={"curFrom"}
           text={"FROM"}
           value={currencyFrom}
           onChange={(e) => {
           setCurrencyFrom(e.target.value);
           } } 
         />
         <Select
           currId={"curTo"}
           text={"TO"}
           value={currencyTo}
           onChange={(e) => {
             setCurrencyTo(e.target.value);
           } } 
         />
         <p>{exchangeRate}</p>
      </div>

      <div>
      <p><small>AMOUNT</small></p>
         <input type="number" value={amount}
               onChange={(e) =>{
                   setAmount(e.target.value);
               } }
         />
         <h2>{result}</h2>
      </div>
      
    </Paper>
  );

}

export default Convert;
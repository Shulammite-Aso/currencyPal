import React, {useState, useEffect} from 'react';
//import Box from '@material-ui/core/Box';

import Select from './Select'

 function Convert() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("AUD");
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const API_KEY = "ff52dab3b5e37443a177";

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
    <div>
      <Select
        currId={"curFrom"}
        value={currencyFrom}
        onChange={(e) => {
        setCurrencyFrom(e.target.value);
        } } 
      />
      <Select
        currId={"curTo"}
        value={currencyTo}
        onChange={(e) => {
          setCurrencyTo(e.target.value);
        } } 
      />

      <input type="number" value={amount}
            onChange={(e) =>{
                setAmount(e.target.value);
            } }
      />
        <p>{exchangeRate}</p>
      <h2>{result}</h2>
    </div>
  );

}

export default Convert;
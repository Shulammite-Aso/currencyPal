import React, {useState} from 'react';
import Select from './select';

 const Convert = () => {

    const [currencyFrom, setCurrencyFrom] = useState("USD");
    const [currencyTo, setCurrencyTo] = useState("AUD");
    const [amount, setAmount] = useState("");
    const API_KEY = process.env.API_KEY;
    var exRate;

    const convert = async () => {
   
        const url = `https://free.currconv.com/api/v7/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=${API_KEY}`;
    
        try {
         const res = await fetch(url);
         const data = await res.json();
         exRate = data[Object.keys(data)[0]];
        }catch(err) {
          console.log(err);
        };
    
     };

     convert();

    return (
        <div>
            <Select 
        currId={"curFrom"} 
        value={currencyFrom}
        onChange={(e) => setCurrencyFrom(e.target.value)} 
        />
          <Select
        currId={"curTo"} 
        value={currencyTo}
        onChange={(e) => setCurrencyTo(e.target.value)}
        />
            <input type="number" placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />

            <h2>hi</h2>
        </div>
    )

};

export default Convert;
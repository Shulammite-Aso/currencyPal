import React, {useState, useEffect} from 'react';

const Select = (props) => {
    const [exRate, setExRate] = useState([]);

    useEffect(() => {
        fetch("https://free.currconv.com/api/v7/currencies?apiKey=ff52dab3b5e37443a177")
          .then(response => response.json())
          .then(data => {
             var rate = data[Object.keys(data)[0]];
             setExRate(rate);
            console.log(exRate);
          });
      }, [exRate]);

    return (
        
        <select id={props.currId} className="postfix"
        value={props.value}
        onChange={props.onChange}
        >
        {exRate.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
        </select>
    )
        }

        export default Select;
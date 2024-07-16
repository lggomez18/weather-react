import React from "react";
import axios from "axios";

export default function Weather(props){
    
    function handleResponse(response){
        alert (`The weather in ${response.data.name} is ${response.data.main.temp} in celsius`);
    }
    let apiKey = "57d09144bf433da24574a6e95f14182c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get (apiUrl).then(handleResponse);
    return <h2>Hello from World</h2>
}
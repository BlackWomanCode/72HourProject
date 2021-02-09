import React, {useState, useEffect} from "react";
import "./weather.css"; 
// const lat = "39.9679389";
// const long = "-86.12427819999999";
const key = "d7ae70b412dfeecd253828278594b5e3";

const Weather = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");
    const [temperature, setTemperature] = useState("");
    const [degrees, setDegrees] = useState("");
    const [button, setButton] = useState("");
    const [wind, setWind] = useState("");
    const [clouds, setClouds] = useState("");

    useEffect (()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  if (data.cod === 200) {
                      setCity(data.name); 
                      setCountry(data.sys.country); 
                      setIcon(data.weather[0].icon); 
                      setDescription(data.weather[0].description); 
                      setTemperature(data.main.temp); 
                      setDegrees("°F"); 
                      setButton("°C / °F")
                      setWind(data.wind.speed); 
                      setClouds(data.clouds.all); 
                  }
                });
        })
      




    },[])
    const toFahrenheit = () => {
        let result = temperature *1.8 + 32; 
        return result.toFixed(2); 
    }; 

    const toCelcius = () => {
        let result = (temperature - 32) * 0.5556; 
        return result.toFixed(2); 
    }; 

    const handleClick = () => {
        setButton("°F/°C" ); 
        if (degrees==="°C") {
            let farenheit = toFahrenheit(); 
            setTemperature(farenheit); 
            setDegrees("°F"); 
        }else if (degrees ==="°F") {
            let celcius = toCelcius(); 
            setTemperature(celcius); 
            setDegrees("°C"); 
            setButton("°C/°F"); 

        }

        }
    
    
  return (
    <div >
        <h1>Current Local Weather</h1>
        <div className="card-container">
        <div className="card">
                <img  className="card-img-top"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather img"/>
            
        
<div className="card-body">
            <h2 className="card-title"> 
                {city}, {country}
            </h2>
            <p className="card-text">
                <b>Current condition:</b> '{description}'
            </p>
            <p className="card-text">
                <b> Temperature:</b>
                {temperature} {degrees}
            </p>
            <p className="card-text">
                <b> Wind Speed:</b>
                {wind} mph
            </p>
            <p className="card-text">
                <b> Cloud Cover:</b>
                {clouds}%
            </p>
            <button className="btn btn-primary mb-2" onClick={handleClick}>
        {button}
    </button>
    </div>
    </div>
    </div>
    
</div> 

  );
};
export default Weather;
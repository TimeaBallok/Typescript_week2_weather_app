import React, {useDebugValue, useEffect, useState} from 'react';
import "./styles.css";
import facade from "../facade.js";
import {part1, part2} from "../settings.js";

function Home(props) {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})
    const [toggle, setToggle] = useState(false)

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const fetchWeather = async(e) => {
        e.preventDefault()
        const info = part1 + part2
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apiKey=' + info)
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch(e => console.log(e))
        console.log(weather)
        setToggle(!toggle)
    }




    return (
        <div>
        <form className="input">
            <input onChange={handleCity} type="text" placeholder="Enter a city" className="input_box"/>
            <button onClick={fetchWeather} className="input_submit" type="submit">
                Search
            </button>
        </form>
            <br/><br/>

            <div>
                {toggle && (
                    <div>
                    <h4>Weather in {weather.name} ({weather.sys.country})</h4>
                    <br/>
                    <h5>Temperature: {(Math.round(weather.main.temp * 100) / 100-273).toFixed(1)} °C</h5>
                    <h5>Feels like: {(Math.round(weather.main.feels_like * 100) / 100-273).toFixed(1)} °C</h5>
                    <h5>Pressure: {weather.main.pressure} hPa</h5>
                    <h5>Humidity: {weather.main.humidity} %</h5>
                    <h5>Visibility: {weather.visibility / 1000} km</h5>
                    <h5>Wind: {weather.wind.speed} m/s</h5>
                    </div>
                )}
            </div>


        </div>


    );
}

export default Home;
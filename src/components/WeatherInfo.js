import React from 'react';
import { useSelector } from 'react-redux';

import sunImage from '../assets/sun.png';
import cloudImage from '../assets/cloud.png';
import rainImage from '../assets/rain.png';

const WeatherInfo = ({ maxWidth }) => {
    const { data, loading, error } = useSelector((state) => state.weather);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>City not Found, Please Try Again!</p>;
    if (!data) return null;

    const TempInCelsius = (data.main.temp - 273).toFixed(2);

    let weatherImage;

    if (data.weather[0].id === 800) {
        if (TempInCelsius > 35) {
            weatherImage = sunImage;
        } else {
            weatherImage = sunImage;
        }
    } else if ([801, 802, 803, 804].includes(data.weather[0].id)) {
        if (TempInCelsius > 35) {
            weatherImage = sunImage;
        } else {
            weatherImage = cloudImage;
        }
    } else if ([500, 501, 502, 503, 504].includes(data.weather[0].id)) {
        weatherImage = rainImage;
    } else {
        weatherImage = cloudImage;
    }

    return (
        <div style={{
            maxWidth: maxWidth || '320px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            padding: '20px',
            borderRadius: '10px',
            margin: '20px auto',
            marginTop: '2em',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
        }}>
            <h2>{data.name}</h2>
            {weatherImage && (
                <img src={weatherImage} alt="Weather" style={{ width: '100px', height: '100px' }} />
            )}
            <p>Temperature: {TempInCelsius}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherInfo;

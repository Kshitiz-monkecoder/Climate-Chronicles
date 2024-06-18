import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { fetchNews } from '../actions/newsAction';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchWeather(city));
        dispatch(fetchNews());
    };
    if (city=== '') {
        dispatch(fetchWeather("New York"));
        dispatch(fetchNews());
    }

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '300px',
                    outline: 'none'
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#8faff5',
                    fontWeight: '400',
                    color: '#5b8af0',
                    border: '1px solid #4CAF50',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    outline: 'none'
                }}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import NewsArticles from './components/NewsArticles';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    color: '#fff',
                    textShadow: '2px 2px 6px rgba(0, 0, 0)'
                }}>Climate Chronicles</h1>
                <SearchBar />
                <WeatherInfo />
                <NewsArticles />
            </div>
        </Provider>
    );
};

export default App;

import axios from 'axios';

export const fetchWeather = (city) => async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b1574bd69b567440469c8a2bced5898`);
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: "error.message" });
    }
};


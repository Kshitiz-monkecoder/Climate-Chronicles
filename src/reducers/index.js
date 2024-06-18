import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';

export default combineReducers({
    weather: weatherReducer,
    news: newsReducer,
});

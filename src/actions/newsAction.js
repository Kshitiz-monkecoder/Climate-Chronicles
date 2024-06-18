import axios from 'axios';

export const fetchNews = () => async (dispatch) => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=weather&apiKey=c1aabf0fd5284557a41b7a88723de112`);
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data.articles });
    } catch (error) {
        dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error.message });
    }
};

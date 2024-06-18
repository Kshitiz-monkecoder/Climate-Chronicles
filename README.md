# Climate Chronicles

Climate Chronicles is a React application that provides weather information and related news articles.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   cd <project-folder>
   npm install
   ```

3. Set up API keys:
   - Obtain an API key from OpenWeatherMap and NewsAPI.
   - Replace `<weather-api-key>` in `src/actions/weatherActions.js` with your OpenWeatherMap API key.
   - Replace `<news-api-key>` in `src/actions/newsActions.js` with your NewsAPI API key.

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

3. Enter a city name in the search bar to fetch weather information and related news articles.

## Features

- Displays current weather details including temperature, humidity, and wind speed.
- Fetches news articles related to weather using NewsAPI.
- Responsive design using Material-UI components.

## Technologies Used

- React
- Redux
- Axios
- Material-UI


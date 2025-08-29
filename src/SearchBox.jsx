import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'ff33e8b87da82722607ab4f644c6d36b';

  const getWeatherInfo = async () => {
    try {

      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

     
      if (!response.ok) {
        throw new Error('City not found');
      }

      const jsonResponse = await response.json();
      
      const result = {
        city: jsonResponse.name,
        feels_like: jsonResponse.main.feels_like,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      };

      return result;

    } catch (err) {
      console.error(err);
      
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity('');
    } catch (err) {
      setError(true); 
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField 
          id='city' 
          label='City Name' 
          variant='outlined' 
          required 
          value={city} 
          onChange={handleChange}
        />
        <br />
        <Button variant='contained' type='submit'>
          Search
        </Button>
        {error && <p style={{ color: 'red' }}>No such place found!</p>}
      </form>
    </div>
  );
}
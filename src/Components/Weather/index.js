


// // e: Event object ko represent karta hai, jisme input field ka sara data hota hai.
// // e.target.value: Uska value jo user ne input field me type kiya hai.
// // setCity(e.target.value) aapka city state ko correct value set karega.



// // Weather API ko city ka naam isliye dena zaroori hai kyunki:

// // Location-Specific Data (Sthanik Jaankari): Har sheher ka mausam alag hota hai, aur API ko ye pata chalna chahiye ki aap kis sheher ka mausam jaan'na chahte ho. API tabhi sahi mausam ki jaankari de sakti hai jab usse pata ho ki kaunsi location ka data bhejna hai.

// // API Query Parameters: Jab aap city ka naam API ko dete ho, toh wo city ko identify karke uske mausam ka data nikalti hai. Agar aap city ka naam nahi doge, toh API ko ye samajhne mein dikkat hogi ki aap kis jagah ka mausam dekhna chahte ho.

// // Accurate Results: Aap jab city ka naam doge, toh API aapko wahi sheher ka sahi mausam dikhayegi. Har sheher mein ek hi waqt par alag mausam ho sakta hai, isliye city ka naam dena zaroori hota hai.

// // Isliye, jab bhi aapko kisi sheher ka mausam dekhna hota hai, API ko us city ka naam batana padta hai taaki wo aapko correct data provide kar sake.






import React, { useState } from 'react';
import styles from './Weather.module.scss'; // Import SCSS styles
import { fetchWeather } from '../../Services/api';
import { CircularProgress } from '@mui/material';

const Weather = () => {
    const [city, setCity] = useState('');  // Store city name
    const [data, setData] = useState(null); // Store API data
    const [error, setError] = useState(''); // Store error message
    const [loading, setLoading] = useState(false); // Loading state

    // Function to check the weather
    const checkWeather = async () => {
        setLoading(true);                                // Set loading true before API call
        console.log("Checking weather for city:", city); // Log the city being checked
        try {
            const response = await fetchWeather(city);
            console.log("API Response:", response); // Log the API response

            if (response.status === 200) {
                console.log("Weather data received:", response.data); // Log the weather data
                setData(response.data);
                setError('');
            } else {
                console.error("Error fetching weather data:", response.status); // Log error status
                setData(null);
                setError('Error fetching weather data.');
            }
        } catch (error) {
            console.error("An error occurred:", error); // Log any errors
            setError('An error occurred while fetching data.');
        } finally {
            setLoading(false);  // Set loading to false after API call completes
        }
    };

    return (
        <div>
            <div className={`container ${styles.weatherContainer}`}>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form className='text-center'>
                            <input
                                type='text'
                                placeholder='Enter City'
                                value={city}
                                className='form-control'
                                onChange={(e) => {
                                    console.log("City input changed to:", e.target.value); // Log the input change
                                    setCity(e.target.value);
                                }}
                            />
                            <button
                                className='btn btn-danger btn-lg mt-3'
                                type='button'
                                onClick={checkWeather}
                            >
                                Get Weather
                            </button>
                        </form>

                        <div className="mt-4 p-4 bg-light rounded">
                            {loading ? (
                                <CircularProgress />  // Show loader while fetching data
                            ) : data ? (
                                <>
                                    <h2>{data.name}</h2>  {/* City name */}
                                    <p>Temperature: {data.main.temp} °C</p>  {/* Temperature */}
                                    <p>Weather: {data.weather[0].description}</p>  {/* Weather description */}
                                </>
                            ) : (
                                <p>{error ? error : 'No data available. Please enter a city name.'}</p>  // Show error or default message
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;

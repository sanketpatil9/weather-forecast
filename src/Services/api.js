
import axios from "axios";
export const fetchWeather = async (city) => {
    try {
        // City name ko API URL me daal rahe hain
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c276d4d2e98866e1f50a0bccddc84f15&units=metric`);
        return response; // Response ko return karte hain
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching weather data'); // Agar koi error aata hai to throw karte hain
    }
};

// import axios from "axios";
// export const fetchWeather = async (city) => {
//     const apiKey = 'c276d4d2e98866e1f50a0bccddc84f15'; // API key
//     try {
//         // City name ko API URL me daal rahe hain
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//         return response; // Response ko return karte hain
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error fetching weather data'); // Agar koi error aata hai to throw karte hain
//     }
// };

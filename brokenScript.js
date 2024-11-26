// OpenWeatherMap API Key
const apiKey = "b13852367f55131884d9289580dedd31";

// Change to your city of choice
// const city = "Calgary";

// URL with string interpolation to insert city and API key
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch data
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData(apiurl).then((data) => {
  if (data) {
    console.log("Weather Data:", data);
    const weather = data.weather[0].description;
    const temperature = data.main.temp - 273.15;
    console.log(
      `The weather in ${city} is ${weather} with a temperature of ${temperature.toFixed(
        2
      )}°C.`
    );
  } else {
    console.error("No data received");
  }
});

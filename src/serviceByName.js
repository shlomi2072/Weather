export const getWeatherByCity = async (city) => {
    const weatherApiKey = 'c85262931f108c4c7f29bbcecdb8abfb'
    // console.log(weatherApiKey)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`);
        const data = await response.json();
        return data;
      } catch {
        throw new Error('Error fetching weather');
      } 
}
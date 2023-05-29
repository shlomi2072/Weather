export const getWeatherByLatLon = async (lat , lon) => {
    const weatherApiKey = 'c85262931f108c4c7f29bbcecdb8abfb';
    // console.log(weatherApiKey)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=metric&lang=he&appid=${weatherApiKey}`);
        const data = await response.json();
        return data;
      } catch {
        throw new Error('Error fetching weather');
      } 
}
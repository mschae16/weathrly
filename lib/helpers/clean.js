const dataClean = (dataObject) => {
  const currentData = {
    temperature: dataObject.current_observation.temp_f,
    location: dataObject.current_observation.display_location.full,
    day: dataObject.forecast.simpleforecast.forecastday[0].date.day,
    monthname: dataObject.forecast.simpleforecast.forecastday[0].date.monthname,
    year: dataObject.forecast.simpleforecast.forecastday[0].date.year,
    weatherSummary: dataObject.current_observation.weather,
    highTemp: dataObject.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowTemp: dataObject.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  };

  const hourlyData = () => {
    return dataObject.hourly_forecast
    .slice(0, 7)
    .map(obj => {
      return ({
        time: obj.FCTTIME.civil,
        icon: obj.icon_url,
        temp: obj.temp.english,
      });
    });
  };

  const tenDay = () => {
    return dataObject.forecast.simpleforecast.forecastday
    .map(obj => {
      return ({
        day: obj.date.weekday_short,
        icon: obj.icon_url,
        high: obj.high.fahrenheit,
        low: obj.low.fahrenheit,
      });
    });
  };

  return {
    currentData, hourlyData: hourlyData(), tenDay: tenDay(),
  };
};

export default dataClean;

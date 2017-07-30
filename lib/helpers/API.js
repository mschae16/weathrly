import Key from '../key';
import dataClean from './clean';

const callApi = (modifiedLocation) => {
  return fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/hourly/q/${modifiedLocation}.json`)
    .then(result => result.json())
    .then(parsedResult => dataClean(parsedResult))
    .catch(error => console.log('GFY', error))
};

export default callApi;

import Key from '../key';
import dataClean from './clean';

const callApi = () => {
  return fetch('http://api.wunderground.com/api/' + Key +
    '/conditions/forecast/forecast10day/hourly/q/CO/Denver.json')
    .then(result => result.json())
    .then(parsedResult => dataClean(parsedResult))
    .catch(error => console.log('GFY', error))
};

export default callApi;

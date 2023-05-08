import {getJson} from './requestJson.mjs'
import * as https from 'https'
export function getWeatherData(weatherUrl) {
    return getJson(https,weatherUrl)
    .catch( e => { throw'Error while fetching Weather Data.\n' + e  });

}

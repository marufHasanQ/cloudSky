
















import * as http from 'http';
import {getJson} from './requestJson.mjs'
export const getLocationObject = locationUrl => {

    return new Promise((resolve,reject) => {

        getJson(http,locationUrl)
            .then((data) => resolve ({lat: data.lat, lon: data.lon, timezone: data.timezone}))
            .catch(console.log)
    })

};

//getLocationObject(locationUrl).then(console.log).catch(console.log);

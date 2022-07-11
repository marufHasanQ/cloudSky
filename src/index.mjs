
















import {createArgument2DArray} from './inputProcess/getArgument.mjs' 
import {checkArgumentValidity} from './inputProcess/argumentValidityCheck.mjs' 
import {optionsArray} from './options.mjs' 
import {getWeatherUrlString} from './api/weatherApiUrl.mjs' 
import {getWeatherData} from './api/weatherApiData.mjs'
import {getLocationObject} from  './api/getLocation.mjs'
import {showResult} from './outputProcess/show.mjs'
import {showHelpDialog} from './outputProcess/showHelpDialog.mjs'

const locationUrl = `http://ip-api.com/json/?fields=status,message,regionName,city,lat,lon,timezone`;


weatherApp();

function weatherApp() {


    let inputArray = createArgument2DArray(process.argv.slice(2));
    console.table( inputArray);
    if(inputArray.find(v => v[0] ==='help')){
        showHelpDialog(optionsArray)(inputArray)
        return 0;
    }
    //checks validity of the inputs, if inputs is invalid throws error.
    const inputValidity = checkArgumentValidity(optionsArray)(inputArray);
    console.log('inputValidity',inputValidity);
    //const locationObject= { lat: 23.7257, lon: 90.4026, timezone: 'Asia/Dhaka' };


    getLocationObject(locationUrl)
        .then(locationObject=> {
            console.log('locationObject',locationObject);
            const weatherUrl = getWeatherUrlString(inputArray)(locationObject)
            console.log('weatherUrl',weatherUrl);
            getWeatherData(weatherUrl)
                .then(data => showResult(inputArray)(data))
                .catch(console.log);
        })
        .catch(console.log);
}


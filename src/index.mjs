#! /usr/bin/env node
import {createArgument2DArray} from './inputProcess/getArgument.mjs' 
import {checkArgumentValidity} from './inputProcess/argumentValidityCheck.mjs' 
import {optionsArray} from './options.mjs' 
import {getWeatherUrlString} from './api/weatherApiUrl.mjs' 
import {getWeatherData} from './api/weatherApiData.mjs'
import {getLocationObject} from  './api/getLocation.mjs'
import {showResult} from './outputProcess/show.mjs'
import {greenB,yellowB,black} from './outputProcess/designTemplate.mjs'
import {showHelpDialog} from './outputProcess/showHelpDialog.mjs'

const locationUrl = `http://ip-api.com/json/?fields=status,message,regionName,city,lat,lon,timezone`;

weatherApp();

function weatherApp() {


    let inputArray = createArgument2DArray(process.argv.slice(2));
    //console.table( inputArray);
    if(inputArray.find(v => v[0] ==='help')){
        showHelpDialog(optionsArray)(inputArray)
        return 0;
    }
    //checks validity of the inputs, if inputs is invalid throws error.

    try{
        const inputValidity = checkArgumentValidity(optionsArray)(inputArray);
    }

    catch(e){
        console.log(e.message);
        return;
    }
    //    console.log('inputValidity',inputValidity);
    //const locationObject= { lat: 23.7257, lon: 90.4026, timezone: 'Asia/Dhaka' };


    getLocationObject(locationUrl)
        .then(locationObject=> {
            console.log();
            console.log(greenB(black(' Region ')),'   ',yellowB(' '+ black(locationObject.city+ ' ')));
            console.log();
            return getWeatherUrlString(inputArray)(locationObject)
            //console.log('weatherUrl',weatherUrl);
        })

        .then(weatherUrl => getWeatherData(weatherUrl)
            //.catch(console.log);

        )
        .then(data => showResult(inputArray)(data))

        .catch(
            e => console.log('error',e.message)
            //console.log(`Error occur during the process`)
            //return ;
        );
}

const l = 5;


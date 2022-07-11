








import {optionsArray} from '../options.mjs';

export function getWeatherUrlString(inputArray) {
    return locationObject=>{
        let fields ='';
        let temperature_unit = '';
        let past_days = '';
        let windspeed_unit = '';
        let settings = '';
        //        const inputArrayMap = new Map(inputArray);

        inputArray.forEach((value,index) => {

            //temperature_unit
            if(optionsArray[0].get('option').includes(value[0])) 
                // temperature_unit = temperature_unit+'&temperature_unit='+ value[1].join(',');
                settings = settings +'&temperature_unit='+ value[1].join(',');

            if(optionsArray[1].get('option').includes(value[0])) 
                fields = fields +','+ value[1].join(',');

            if(optionsArray[2].get('option').includes(value[0])) 
                //past_days = past_days +'&past_days='+ value[1].join(',');
                settings = settings +'&past_days='+ value[1].join(',');

            if(optionsArray[3].get('option').includes(value[0])) 
                settings = settings+'&windspeed_unit='+ value[1].join(',');
        });

        return `https://api.open-meteo.com/v1/forecast?latitude=${locationObject.lat}&longitude=${locationObject.lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,windspeed_10m_max,sunset${fields}&timezone=${locationObject.timezone}${settings}`;
        //${temperature_unit}${past_days}${windspeed_unit}`;
    }
}


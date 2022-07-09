












import{black,yellow,blue,white,light,blueBackground} from './designTemplate.mjs';  


const headLineDesign = data =>blueBackground(yellow(data));
const dailyValue = data =>light(black(data));
const grey = data =>light(black(data));
const lightBlue = data => light(blue(data));

export function showResult(inputArray) {
    return data => {

        console.log(headLineDesign('Current Weather'));
        //console.log(data.current_weather);
        showCurrentWeather(data.current_weather,data.daily_units);
        console.log(`Forcast for next seven days`);
        showDailyWeather(data.daily,data.daily_units);
    }

}

function showCurrentWeather(currentWeather,units) {

    //console.log(`${grey('Temparature: ')}${lightBlue(currentWeather.temperature)}`);
    //console.log(`${grey('Windspeed: ')}${lightBlue(currentWeather.windspeed)}`);
    //console.log(`${grey('Wind Direction: ')}${lightBlue(currentWeather.winddirection)}`);
    //console.log(`${grey('Time : ')}${lightBlue(currentWeather.time)}`);
    printEntries('Temparature: ',currentWeather.temperature,units.temperature_2m_max);
    printEntries('Windspeed ',currentWeather.windspeed,units.windspeed_10m_max);
    printEntries('Wind Direction',currentWeather.winddirection,'')//units.winddirection);
    printEntries('Weather Code',currentWeather.weathercode,'');
    printEntries('Time',currentWeather.time,'');

}

function showDailyWeather(dailyWeather,units) {
    dailyWeather.time.forEach((v,i) => {
        //Object.keys(data.daily).for

        console.log()
        console.log(`time`,v)
        console.log(`---------------------`)
        console.log()
        for (const key in dailyWeather){
            if(key === 'time') continue;

            //        console.log(`${light(blue(key))} ${dailyValue(dailyWeather[key][i])}`);
            //        console.log(`${grey(key)}: ${lightBlue(dailyWeather[key][i])}`);
            printEntries(key,dailyWeather[key][i],units[key]); 
        }
    })

}



function printEntries (entryName,value,unit) {

    console.log(`${grey(entryName)}: ${lightBlue(value)} ${unit}`);
} 






/*


showResult('')(
    {"latitude":23.875,"longitude":90.375,"elevation":9.0,"generationtime_ms":0.9950399398803711,"utc_offset_seconds":28800,"current_weather":{"temperature":27.2,"windspeed":8.7,"winddirection":156.0,"weathercode":80.0,"time":"2022-07-02T09:00"},"daily":{"sunrise":["2022-07-02T07:13","2022-07-03T07:14","2022-07-04T07:14","2022-07-05T07:14","2022-07-06T07:15","2022-07-07T07:15","2022-07-08T07:16"],"sunset":["2022-07-02T20:50","2022-07-03T20:50","2022-07-04T20:50","2022-07-05T20:50","2022-07-06T20:50","2022-07-07T20:50","2022-07-08T20:50"],"time":["2022-07-02","2022-07-03","2022-07-04","2022-07-05","2022-07-06","2022-07-07","2022-07-08"],"weathercode":[80.0,95.0,95.0,80.0,3.0,3.0,80.0],"temperature_2m_max":[34.5,33.4,33.5,33.9,33.9,33.0,32.8]},"daily_units":{"time":"iso8601","temperature_2m_max":"°C","sunrise":"iso8601","weathercode":"wmo code","sunset":"iso8601"}}
)



import {getResponse,getResponseHttps} from './sendingRequest.mjs'

const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=23.8179&longitude=90.4103&hourly=temperature_2m&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia/Dhaka';
const locationUrl ='http://ipinfo.io';
let fields ='';
let settings = ''
function createApiUrl(argumentArray) {
    const argumentArrayMap = new Map(argumentArray);
    if(argumentArrayMap.has('fields')) fields = 
}
getResponse(locationUrl).then((data) => {
    const {ip,loc,timezone} =data;
    console.log(ip,loc,timezone);
    getResponseHttps(weatherUrl).then(data => {
        console.log(`Current Weather`,data.current_weather);
        console.log(`Forcast for next seven days`);
        data.daily.time.forEach((v,i) => {
            //Object.keys(data.daily).for

            console.log()
            console.log(`time`,v)
            console.log(`---------------------`)
            console.log()
            for (const key in data.daily){
                if(key === 'time')
                    continue;

                console.log(`${key} ${data.daily[key][i]}`);
            }
        })
    });
});
*/

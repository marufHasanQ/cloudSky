












import{black,yellow,blue,white,light,blueB,green,dark,skyB} from './designTemplate.mjs';  
import{codeTranslation} from './wmoCodeTranslation.mjs';  


const headLineDesign = data =>blueB(yellow(data));
const secondHeadLineDesign = data => blueB(data);
const grey = data => light(black(data));
const lightBlue = data => light(blue(data));

export function showResult(inputArray) {
    return data => {

        // console.log(headLineDesign(' Current Weather '));
        horizontalPlacement([headLineDesign(' Current Weather '),codeTranslation(Number(data.current_weather.weathercode))]) ('  ')
        //.repeat( 15 - 'Current Weather'.split('').length)) ;
        showCurrentWeather(data.current_weather,data.daily_units);
        console.log();
        console.log(`Forcast for next seven days...`);
        console.log();
        showDailyWeather(inputArray,data.daily,data.daily_units);
    }

}

function showCurrentWeather(currentWeather,units) {


    printEntries('Temparature ',currentWeather.temperature,units.temperature_2m_max);
    printEntries('Wind Direction ',currentWeather.winddirection,'')//units.winddirection);
    printEntries('Weather Code ',currentWeather.weathercode,'');
    printEntries('Time ',formateTimeValue(currentWeather.time),'');
    printEntries('Windspeed ',currentWeather.windspeed,units.windspeed_10m_max);
}


function showDailyWeather(inputArray,dailyWeather,units) {

    dailyWeather.time.forEach((v,i) => {
        console.log()

        // horizontalPlacement([secondHeadLineDesign(` Day ${i+1} `), codeTranslation(Number(dailyWeather.weathercode[i]))])(' '.repeat( 5 - 'Day 5'.split('').length));
        horizontalPlacement([secondHeadLineDesign(` Day ${i+1} `), codeTranslation(Number(dailyWeather.weathercode[i]))])('  ');
        console.log();
        printEntries('Maximum Temparature',dailyWeather.temperature_2m_max[i],units.temperature_2m_max);
        printEntries('Minimum Temparature',dailyWeather.temperature_2m_min[i],units.temperature_2m_min);
        printEntries('sunrise',formateTimeValue(dailyWeather.sunrise[i]),'');

        printEntries('Sunset',formateTimeValue(dailyWeather.sunset[i]),'');

        printEntries('windspeed',dailyWeather.windspeed_10m_max[i],units.windspeed_10m_max);


        let dailyUserParameter = inputArray.find(v => v[0] === 'fields' ||v[0] === 'f' );
        dailyUserParameter = dailyUserParameter? dailyUserParameter[1] : [];

        for (const key of dailyUserParameter){

            if(key === 'time') continue;

            //        console.log(`${light(blue(key))} ${dailyValue(dailyWeather[key][i])}`);
            //        console.log(`${grey(key)}: ${lightBlue(dailyWeather[key][i])}`);
            printEntries(key,dailyWeather[key][i],units[key]); 
        }
    })

}

function formateTimeValue(time) {
    return time.split('T')[1]; 
}
function horizontalPlacement(array) {
    return gap => console.log(array.reduce ((acc,v) => acc + gap + v)); 
}

function printEntries (entryName,value,unit,maxPaddingSize=35) {

    console.log(`${grey(entryName+':')} ${grey('_').repeat( maxPaddingSize- entryName.split('').length)} ${lightBlue(value)} ${(yellow(unit))}`);
} 


//console.log('code',codeTranslation(1));



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
